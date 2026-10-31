import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();

    try {
        const {
            user_id,
            manager_id,
            name,
            description
        } = await request.json();

        await client.query("BEGIN");

        // Verify that the requester is an admin.
        const adminResult = await client.query(
            `SELECT role
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        if (adminResult.rows[0]?.role !== "admin") {
            throw new Error("Only admins can create projects");
        }

        // Check that the selected user is completely unassigned.
        const managerResult = await client.query(
            `SELECT user_id
             FROM users
             WHERE user_id = $1
             AND project_id = 0
             AND task_id = 0
             FOR UPDATE`,
            [manager_id]
        );

        if (managerResult.rowCount === 0) {
            throw new Error("Selected user is invalid or already assigned");
        }

        // Create the project.
        const projectResult = await client.query(
            `INSERT INTO projects (name, description)
             VALUES ($1, $2)
             RETURNING *`,
            [name, description || null]
        );

        const project = projectResult.rows[0];

        // Assign the selected user as project manager.
        await client.query(
            `UPDATE users
             SET role = 'project manager',
                 project_id = $1,
                 task_id = 0
             WHERE user_id = $2`,
            [project.project_id, manager_id]
        );

        await client.query("COMMIT");

        return NextResponse.json({ project });

    } catch (error) {
        await client.query("ROLLBACK");

        return NextResponse.json(
            { error: error.message || "Could not create project" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}
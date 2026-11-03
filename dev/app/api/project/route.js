
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();
    let transactionStarted = false;

    try {
        const {
            user_id,
            manager_id,
            name,
            description
        } = await request.json();

        if (!user_id || !manager_id || !name?.trim()) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await client.query("BEGIN");
        transactionStarted = true;

        // Verify requester is an admin.
        const adminResult = await client.query(
            `SELECT role
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        if (adminResult.rows[0]?.role !== "admin") {
            throw new Error("Only admins can create projects");
        }

        // Verify selected user is an unassigned default user.
        const managerResult = await client.query(
            `SELECT user_id
             FROM users
             WHERE user_id = $1
               AND role = 'default'
               AND project_id = 0
               AND task_id = 0
             FOR UPDATE`,
            [manager_id]
        );

        if (managerResult.rowCount === 0) {
            throw new Error(
                "Selected user is invalid or already assigned"
            );
        }

        // Create project.
        const projectResult = await client.query(
            `INSERT INTO projects (name, description)
             VALUES ($1, $2)
             RETURNING *`,
            [name.trim(), description || null]
        );

        const project = projectResult.rows[0];

        // Assign selected user as project manager.
        const updateResult = await client.query(
            `UPDATE users
             SET role = 'project manager',
                 project_id = $1,
                 task_id = 0
             WHERE user_id = $2
               AND role = 'default'
               AND project_id = 0
               AND task_id = 0
             RETURNING user_id`,
            [project.project_id, manager_id]
        );

        if (updateResult.rowCount === 0) {
            throw new Error("Could not assign project manager");
        }

        await client.query("COMMIT");
        transactionStarted = false;

        return NextResponse.json({ project });

    } catch (error) {
        if (transactionStarted) {
            await client.query("ROLLBACK");
        }

        console.error("Create project error:", error);

        return NextResponse.json(
            { error: error.message || "Could not create project" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}

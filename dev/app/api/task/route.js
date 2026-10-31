import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();

    try {
        const {
            user_id,
            project_id,
            manager_id,
            title,
            description
        } = await request.json();

        if (!user_id || !project_id || !manager_id || !title?.trim()) {
            throw new Error("User, project, task manager, and task title are required");
        }

        await client.query("BEGIN");

        // Only an admin or the project manager assigned to this project can add tasks.
        const requesterResult = await client.query(
            `SELECT role, project_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const requester = requesterResult.rows[0];

        const allowed =
            requester?.role === "admin" ||
            (
                requester?.role === "project manager" &&
                Number(requester.project_id) === Number(project_id)
            );

        if (!allowed) {
            throw new Error("Only an admin or this project's project manager can add tasks");
        }

        // Lock and verify that the selected user is completely unassigned.
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

        // Create the task.
        const taskResult = await client.query(
            `INSERT INTO tasks
                (title, description, status, project_id)
             VALUES ($1, $2, $3, $4)
             RETURNING *`,
            [
                title.trim(),
                description || null,
                "pending",
                project_id
            ]
        );

        const task = taskResult.rows[0];

        // The selected user becomes the task manager.
        const assignmentResult = await client.query(
            `UPDATE users
             SET role = 'task manager',
                 project_id = $1,
                 task_id = $2
             WHERE user_id = $3
             AND project_id = 0
             AND task_id = 0
             RETURNING user_id`,
            [project_id, task.task_id, manager_id]
        );

        if (assignmentResult.rowCount === 0) {
            throw new Error("Selected user was assigned elsewhere; please try again");
        }

        await client.query("COMMIT");

        return NextResponse.json({ task });

    } catch (error) {
        await client.query("ROLLBACK");

        return NextResponse.json(
            { error: error.message || "Could not create task" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}


import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();
    let transactionStarted = false;

    try {
        const {
            user_id,
            project_id,
            manager_id,
            title,
            description
        } = await request.json();

        if (
            !user_id ||
            !project_id ||
            !manager_id ||
            !title?.trim()
        ) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await client.query("BEGIN");
        transactionStarted = true;

        // Get requester.
        const requesterResult = await client.query(
            `SELECT role, project_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const requester = requesterResult.rows[0];

        // Check permissions.
        const allowed =
            requester?.role === "admin" ||
            (
                requester?.role === "project manager" &&
                Number(requester.project_id) === Number(project_id)
            );

        if (!allowed) {
            throw new Error(
                "You cannot create tasks in this project"
            );
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

        // Create task.
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

        // Assign selected user as task manager.
        const updateResult = await client.query(
            `UPDATE users
             SET role = 'task manager',
                 project_id = $1,
                 task_id = $2
             WHERE user_id = $3
               AND role = 'default'
               AND project_id = 0
               AND task_id = 0
             RETURNING user_id`,
            [project_id, task.task_id, manager_id]
        );

        if (updateResult.rowCount === 0) {
            throw new Error("Could not assign task manager");
        }

        await client.query("COMMIT");
        transactionStarted = false;

        return NextResponse.json({ task });

    } catch (error) {
        if (transactionStarted) {
            await client.query("ROLLBACK");
        }

        console.error("Create task error:", error);

        return NextResponse.json(
            { error: error.message || "Could not create task" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}


import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();
    let transactionStarted = false;

    try {
        const {
            user_id,
            task_id,
            selected_user_id
        } = await request.json();

        if (!user_id || !task_id || !selected_user_id) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await client.query("BEGIN");
        transactionStarted = true;

        // Get requester.
        const requesterResult = await client.query(
            `SELECT role, project_id, task_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const requester = requesterResult.rows[0];

        if (!requester) {
            throw new Error("Requester not found");
        }

        // Get task.
        const taskResult = await client.query(
            `SELECT task_id, project_id
             FROM tasks
             WHERE task_id = $1`,
            [task_id]
        );

        const task = taskResult.rows[0];

        if (!task) {
            throw new Error("Task not found");
        }

        // Check permissions.
        const allowed =
            requester.role === "admin" ||
            (
                requester.role === "project manager" &&
                Number(requester.project_id) === Number(task.project_id)
            ) ||
            (
                requester.role === "task manager" &&
                Number(requester.task_id) === Number(task.task_id)
            );

        if (!allowed) {
            throw new Error(
                "You cannot add users to this task"
            );
        }

        // Verify selected user is an unassigned default user.
        const selectedUserResult = await client.query(
            `SELECT user_id
             FROM users
             WHERE user_id = $1
               AND role = 'default'
               AND project_id = 0
               AND task_id = 0
             FOR UPDATE`,
            [selected_user_id]
        );

        if (selectedUserResult.rowCount === 0) {
            throw new Error(
                "Selected user is invalid or already assigned"
            );
        }

        // Assign selected user to the task.
        const updateResult = await client.query(
            `UPDATE users
             SET role = 'default',
                 project_id = $1,
                 task_id = $2
             WHERE user_id = $3
               AND role = 'default'
               AND project_id = 0
               AND task_id = 0
             RETURNING user_id, name, role, project_id, task_id`,
            [
                task.project_id,
                task.task_id,
                selected_user_id
            ]
        );

        if (updateResult.rowCount === 0) {
            throw new Error("Could not assign user to task");
        }

        await client.query("COMMIT");
        transactionStarted = false;

        return NextResponse.json({
            message: "User added to task successfully",
            user: updateResult.rows[0]
        });

    } catch (error) {
        if (transactionStarted) {
            await client.query("ROLLBACK");
        }

        console.error("Add user error:", error);

        return NextResponse.json(
            { error: error.message || "Could not add user to task" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}

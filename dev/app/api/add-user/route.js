import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    const client = await pool.connect();

    try {
        const {
            user_id,
            task_id,
            selected_user_id
        } = await request.json();

        if (!user_id || !task_id || !selected_user_id) {
            throw new Error("Requester, task, and selected user are required");
        }

        await client.query("BEGIN");

        // Get the requester's current role and assignment from the database.
        const requesterResult = await client.query(
            `SELECT role, project_id, task_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const requester = requesterResult.rows[0];

        if (!requester) {
            throw new Error("User not found");
        }

        // Get the target task.
        const taskResult = await client.query(
            `SELECT *
             FROM tasks
             WHERE task_id = $1`,
            [task_id]
        );

        const task = taskResult.rows[0];

        if (!task) {
            throw new Error("Task not found");
        }

        // Admin can add users to any task.
        // Project manager can add users only to tasks in their project.
        // Task manager can add users only to their own task.
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
            throw new Error("You cannot add users to this task");
        }

        // Lock and verify the selected user is completely unassigned.
        const selectedCheck = await client.query(
            `SELECT user_id
             FROM users
             WHERE user_id = $1
             AND project_id = 0
             AND task_id = 0
             FOR UPDATE`,
            [selected_user_id]
        );

        if (selectedCheck.rowCount === 0) {
            throw new Error("Selected user is invalid or already assigned");
        }

        // Assign the user to the task as a regular user.
        const selectedResult = await client.query(
            `UPDATE users
             SET role = 'default',
                 project_id = $1,
                 task_id = $2
             WHERE user_id = $3
             AND project_id = 0
             AND task_id = 0
             RETURNING user_id, name, email, role`,
            [
                task.project_id,
                task.task_id,
                selected_user_id
            ]
        );

        if (selectedResult.rowCount === 0) {
            throw new Error("Selected user was assigned elsewhere; please try again");
        }

        await client.query("COMMIT");

        return NextResponse.json({
            message: "User assigned successfully",
            user: selectedResult.rows[0]
        });

    } catch (error) {
        await client.query("ROLLBACK");

        return NextResponse.json(
            { error: error.message || "Could not assign user" },
            { status: 400 }
        );

    } finally {
        client.release();
    }
}

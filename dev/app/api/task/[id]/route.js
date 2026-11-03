
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const { searchParams } = new URL(request.url);
        const user_id = searchParams.get("user_id");

        if (!user_id) {
            return NextResponse.json(
                { error: "User ID is required" },
                { status: 400 }
            );
        }

        // Get requester.
        const requesterResult = await pool.query(
            `SELECT user_id, role, project_id, task_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const requester = requesterResult.rows[0];

        if (!requester) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Get task.
        const taskResult = await pool.query(
            `SELECT *
             FROM tasks
             WHERE task_id = $1`,
            [id]
        );

        const task = taskResult.rows[0];

        if (!task) {
            return NextResponse.json(
                { error: "Task not found" },
                { status: 404 }
            );
        }

        // Check access.
        const allowed =
            requester.role === "admin" ||
            (
                requester.role === "project manager" &&
                Number(requester.project_id) === Number(task.project_id)
            ) ||
            (
                Number(requester.project_id) === Number(task.project_id) &&
                Number(requester.task_id) === Number(task.task_id)
            );

        if (!allowed) {
            return NextResponse.json(
                { error: "You cannot access this task" },
                { status: 403 }
            );
        }

        // Get task manager.
        const managerResult = await pool.query(
            `SELECT user_id, name, email
             FROM users
             WHERE task_id = $1
               AND role = 'task manager'`,
            [task.task_id]
        );

        task.manager = managerResult.rows[0] || null;

        // Get project.
        const projectResult = await pool.query(
            `SELECT *
             FROM projects
             WHERE project_id = $1`,
            [task.project_id]
        );

        // Get available default users.
        const availableUsersResult = await pool.query(
            `SELECT user_id, name
             FROM users
             WHERE role = 'default'
               AND project_id = 0
               AND task_id = 0
             ORDER BY name`
        );

        return NextResponse.json({
            task,
            project: projectResult.rows[0] || null,
            availableUsers: availableUsersResult.rows
        });

    } catch (error) {
        console.error("Get task error:", error);

        return NextResponse.json(
            { error: "Could not load task" },
            { status: 500 }
        );
    }
}

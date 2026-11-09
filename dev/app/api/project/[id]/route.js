
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

        const userResult = await pool.query(
            `SELECT user_id, name, role, project_id, task_id
             FROM users
             WHERE user_id = $1`,
            [user_id]
        );

        const user = userResult.rows[0];

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        // Get project.
        const projectResult = await pool.query(
            `SELECT *
             FROM projects
             WHERE project_id = $1`,
            [id]
        );

        const project = projectResult.rows[0];

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        // Check access.
        const allowed =
            user.role === "admin" ||
            Number(user.project_id) === Number(project.project_id);

        if (!allowed) {
            return NextResponse.json(
                { error: "You cannot access this project" },
                { status: 403 }
            );
        }

        // Get project manager.
        const managerResult = await pool.query(
            `SELECT user_id, name, email
             FROM users
             WHERE project_id = $1
               AND role = 'project manager'`,
            [project.project_id]
        );

        // Get tasks.
        const tasksResult = await pool.query(
            `SELECT *
             FROM tasks
             WHERE project_id = $1
             ORDER BY task_id`,
            [project.project_id]
        );

        // Get project users.
        const usersResult = await pool.query(
            `SELECT user_id, name, email, role, task_id
             FROM users
             WHERE project_id = $1
             ORDER BY name`,
            [project.project_id]
        );

        project.manager = managerResult.rows[0] || null;
        project.tasks = tasksResult.rows;
        project.users = usersResult.rows;

        // Get available default users for Add Task.
        const availableManagersResult = await pool.query(
            `SELECT user_id, name
             FROM users
             WHERE role = 'default'
               AND project_id = 0
               AND task_id = 0
             ORDER BY name`
        );

        return NextResponse.json({
            user,
            project,
            availableManagers: availableManagersResult.rows
        });

    } catch (error) {
        console.error("Get project error:", error);

        return NextResponse.json(
            { error: "Could not load project" },
            { status: 500 }
        );
    }
}

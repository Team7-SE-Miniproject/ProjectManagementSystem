
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const user_id = searchParams.get("user_id");

        if (!user_id) {
            return NextResponse.json(
                { error: "User ID is required" },
                { status: 400 }
            );
        }

        // Get current user.
        const userResult = await pool.query(
            `SELECT user_id, name, email, role, project_id, task_id
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

        // Available users for ALL Add cards.
        const availableUsersResult = await pool.query(
            `SELECT user_id, name
             FROM users
             WHERE role = 'default'
               AND project_id = 0
               AND task_id = 0
             ORDER BY name`
        );

        const availableUsers = availableUsersResult.rows;

        // DEFAULT USER
        if (user.role === "default") {
            const projectResult = await pool.query(
                `SELECT *
                 FROM projects
                 WHERE project_id = $1`,
                [user.project_id]
            );

            const taskResult = await pool.query(
                `SELECT *
                 FROM tasks
                 WHERE task_id = $1`,
                [user.task_id]
            );

            return NextResponse.json({
                user,
                project: projectResult.rows[0] || null,
                task: taskResult.rows[0] || null
            });
        }

        // TASK MANAGER
        if (user.role === "task manager") {
            const projectResult = await pool.query(
                `SELECT *
                 FROM projects
                 WHERE project_id = $1`,
                [user.project_id]
            );

            const taskResult = await pool.query(
                `SELECT *
                 FROM tasks
                 WHERE task_id = $1
                   AND project_id = $2`,
                [user.task_id, user.project_id]
            );

            const project = projectResult.rows[0] || null;
            const task = taskResult.rows[0] || null;

            // Attach the project manager to the project.
            if (project) {
                const projectManagerResult = await pool.query(
                    `SELECT user_id, name, email
                     FROM users
                     WHERE project_id = $1
                       AND role = 'project manager'`,
                    [user.project_id]
                );

                project.manager = projectManagerResult.rows[0] || null;
            }

            if (task) {
                // Attach the task manager to the task.
                const taskManagerResult = await pool.query(
                    `SELECT user_id, name, email
                     FROM users
                     WHERE task_id = $1
                       AND role = 'task manager'`,
                    [user.task_id]
                );

                task.manager = taskManagerResult.rows[0] || null;

                const assignedUsersResult = await pool.query(
                    `SELECT user_id, name, email, role
                     FROM users
                     WHERE project_id = $1
                       AND task_id = $2
                       AND user_id != $3
                     ORDER BY name`,
                    [user.project_id, user.task_id, user.user_id]
                );

                task.assignedUsers = assignedUsersResult.rows;
            }

            return NextResponse.json({
                user,
                project,
                task,
                availableUsers
            });
        }

        // PROJECT MANAGER
        if (user.role === "project manager") {
            const projectResult = await pool.query(
                `SELECT *
                 FROM projects
                 WHERE project_id = $1`,
                [user.project_id]
            );

            const project = projectResult.rows[0] || null;

            // Attach the project manager to the project.
            if (project) {
                const projectManagerResult = await pool.query(
                    `SELECT user_id, name, email
                     FROM users
                     WHERE project_id = $1
                       AND role = 'project manager'`,
                    [user.project_id]
                );

                project.manager = projectManagerResult.rows[0] || null;
            }

            const tasksResult = await pool.query(
                `SELECT *
                 FROM tasks
                 WHERE project_id = $1
                 ORDER BY task_id`,
                [user.project_id]
            );

            return NextResponse.json({
                user,
                project,
                tasks: tasksResult.rows,
                availableManagers: availableUsers
            });
        }

        // ADMIN
        if (user.role === "admin") {
            const projectsResult = await pool.query(
                `SELECT *
                 FROM projects
                 ORDER BY project_id`
            );

            return NextResponse.json({
                user,
                projects: projectsResult.rows,
                availableManagers: availableUsers
            });
        }

        return NextResponse.json(
            { error: "Invalid user role" },
            { status: 400 }
        );

    } catch (error) {
        console.error("Dashboard API error:", error);

        return NextResponse.json(
            { error: "Could not load dashboard" },
            { status: 500 }
        );
    }
}

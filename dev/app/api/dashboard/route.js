
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

        // Get current user
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

        // Available unassigned users
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
                 WHERE task_id = $1
                   AND project_id = $2`,
                [user.task_id, user.project_id]
            );

            return NextResponse.json({
                user,
                project: projectResult.rows[0] || null,
                task: taskResult.rows[0] || null
            });
        }

        // TASK MANAGER
        if (user.role === "task manager") {

            // Get project with project manager and project users
            const projectResult = await pool.query(
                `SELECT
                    p.*,

                    (
                        SELECT json_build_object(
                            'user_id', u.user_id,
                            'name', u.name,
                            'email', u.email
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role = 'project manager'
                        LIMIT 1
                    ) AS manager,

                    (
                        SELECT COALESCE(
                            json_agg(
                                json_build_object(
                                    'user_id', u.user_id,
                                    'name', u.name
                                )
                            ),
                            '[]'::json
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role != 'project manager'
                    ) AS users

                 FROM projects p
                 WHERE p.project_id = $1`,
                [user.project_id]
            );

            // Get task with its task manager
            const taskResult = await pool.query(
                `SELECT
                    t.*,

                    (
                        SELECT json_build_object(
                            'user_id', u.user_id,
                            'name', u.name,
                            'email', u.email
                        )
                        FROM users u
                        WHERE u.project_id = t.project_id
                          AND u.task_id = t.task_id
                          AND u.role = 'task manager'
                        LIMIT 1
                    ) AS manager

                 FROM tasks t
                 WHERE t.task_id = $1
                   AND t.project_id = $2`,
                [user.task_id, user.project_id]
            );

            const task = taskResult.rows[0] || null;

            // Get users assigned to this task
            if (task) {
                const assignedUsersResult = await pool.query(
                    `SELECT user_id, name, email, role
                     FROM users
                     WHERE project_id = $1
                       AND task_id = $2
                       AND user_id != $3
                       AND role = 'default'
                     ORDER BY name`,
                    [user.project_id, user.task_id, user.user_id]
                );

                task.assignedUsers = assignedUsersResult.rows;
            }

            return NextResponse.json({
                user,
                project: projectResult.rows[0] || null,
                task,
                availableUsers
            });
        }

        // PROJECT MANAGER
        if (user.role === "project manager") {

            // Get project with project manager and project users
            const projectResult = await pool.query(
                `SELECT
                    p.*,

                    (
                        SELECT json_build_object(
                            'user_id', u.user_id,
                            'name', u.name,
                            'email', u.email
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role = 'project manager'
                        LIMIT 1
                    ) AS manager,

                    (
                        SELECT COALESCE(
                            json_agg(
                                json_build_object(
                                    'user_id', u.user_id,
                                    'name', u.name
                                )
                            ),
                            '[]'::json
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role != 'project manager'
                    ) AS users

                 FROM projects p
                 WHERE p.project_id = $1`,
                [user.project_id]
            );

            // Get all tasks with their task managers
            const tasksResult = await pool.query(
                `SELECT
                    t.*,

                    (
                        SELECT json_build_object(
                            'user_id', u.user_id,
                            'name', u.name,
                            'email', u.email
                        )
                        FROM users u
                        WHERE u.project_id = t.project_id
                          AND u.task_id = t.task_id
                          AND u.role = 'task manager'
                        LIMIT 1
                    ) AS manager

                 FROM tasks t
                 WHERE t.project_id = $1
                 ORDER BY t.task_id`,
                [user.project_id]
            );

            return NextResponse.json({
                user,
                project: projectResult.rows[0] || null,
                tasks: tasksResult.rows,
                availableManagers: availableUsers
            });
        }

        // ADMIN
        if (user.role === "admin") {

            // Get all projects with their managers and users
            const projectsResult = await pool.query(
                `SELECT
                    p.*,

                    (
                        SELECT json_build_object(
                            'user_id', u.user_id,
                            'name', u.name,
                            'email', u.email
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role = 'project manager'
                        LIMIT 1
                    ) AS manager,

                    (
                        SELECT COALESCE(
                            json_agg(
                                json_build_object(
                                    'user_id', u.user_id,
                                    'name', u.name
                                )
                            ),
                            '[]'::json
                        )
                        FROM users u
                        WHERE u.project_id = p.project_id
                          AND u.role != 'project manager'
                    ) AS users

                 FROM projects p
                 ORDER BY p.project_id`
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

import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request, { params }) {
    try {
        const { id } = await params;

        const { searchParams } = new URL(request.url);
        const userId = Number(searchParams.get("user_id"));

        const userResult = await pool.query(
            `SELECT user_id, role, project_id, task_id
             FROM users
             WHERE user_id = $1`,
            [userId]
        );

        const user = userResult.rows[0];

        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const projectResult = await pool.query(
            "SELECT * FROM projects WHERE project_id = $1",
            [id]
        );

        const project = projectResult.rows[0];

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        // Check whether the user can access this project.
        if (
            user.role !== "admin" &&
            user.project_id !== project.project_id
        ) {
            return NextResponse.json(
                { error: "Access denied" },
                { status: 403 }
            );
        }

        const tasksResult = await pool.query(
            `SELECT * FROM tasks
             WHERE project_id = $1
             ORDER BY task_id`,
            [id]
        );

        const usersResult = await pool.query(
            `SELECT user_id, name, role
             FROM users
             WHERE project_id = $1`,
            [id]
        );

        return NextResponse.json({
            project: {
                ...project,
                tasks: tasksResult.rows,
                users: usersResult.rows
            }
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Could not load project" },
            { status: 500 }
        );
    }
}
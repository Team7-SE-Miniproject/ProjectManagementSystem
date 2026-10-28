import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        if (!name?.trim() || !email?.trim() || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const result = await pool.query(
            `INSERT INTO users
                (name, email, password, role, project_id, task_id)
             VALUES ($1, $2, $3, $4, $5, $6)
             RETURNING user_id, name, email`,
            [name.trim(), email.trim(), password, "default", 0, 0]
        );

        return NextResponse.json(
            {
                message: "Registration successful",
                user: result.rows[0],
            },
            { status: 201 }
        );
    } catch (error) {
        if (error.code === "23505") {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }

        console.error(error);

        return NextResponse.json(
            { message: "Registration failed" },
            { status: 500 }
        );
    }
}
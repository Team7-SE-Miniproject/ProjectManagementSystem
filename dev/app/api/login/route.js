import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        const result = await pool.query(
            `SELECT user_id, name, email
             FROM users
             WHERE email = $1 AND password = $2`,
            [email, password]
        );

        if (result.rows.length === 0) {
            return NextResponse.json(
                { message: "Invalid email or password" },
                { status: 401 }
            );
        }

        return NextResponse.json({
            message: "Login successful",
            user: result.rows[0],
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Login failed" },
            { status: 500 }
        );
    }
}
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Project &amp; Task Manager</h1>
            <p className="page-subtitle">Organise projects, manage tasks, and keep work moving.</p>

            <Link href="/register">Register</Link>
            <br />
            <Link href="/login">Login</Link>
        </main>
    );
}
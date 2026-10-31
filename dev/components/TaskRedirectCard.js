// TaskRedirectCard.js
import Link from "next/link";

export default function TaskRedirectCard({ task }) {
    if (!task) return <p>No task assigned.</p>;

    return (
        <Link href={`/task/${task.task_id}`}>
            <div>{task.title}</div>
        </Link>
    );
}
"use client";

import { useState } from "react";

export default function AddTaskToProject({
    user,
    project,
    managers
}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [managerId, setManagerId] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("/api/task", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: user.user_id,
                project_id: project.project_id,
                manager_id: managerId,
                title,
                description
            })
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.error);
            return;
        }

        window.location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add task to project</h2>

            <input
                placeholder="Task name"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <select
                value={managerId}
                onChange={e => setManagerId(e.target.value)}
                required
            >
                <option value="">Select task manager</option>

                {managers.map(manager => (
                    <option key={manager.user_id} value={manager.user_id}>
                        {manager.name}
                    </option>
                ))}
            </select>

            <button type="submit">Create task</button>
        </form>
    );
}
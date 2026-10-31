"use client";

import { useState } from "react";

export default function AddProject({ user, managers }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [managerId, setManagerId] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("/api/project", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: user.user_id,
                manager_id: managerId,
                name,
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
            <h2>Add project</h2>

            <input
                placeholder="Project name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />

            <textarea
                placeholder="Project description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <select
                value={managerId}
                onChange={e => setManagerId(e.target.value)}
                required
            >
                <option value="">Select project manager</option>

                {managers.map(manager => (
                    <option key={manager.user_id} value={manager.user_id}>
                        {manager.name}
                    </option>
                ))}
            </select>

            <button type="submit">Create project</button>
        </form>
    );
}
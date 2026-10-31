"use client";

import { useState } from "react";

export default function AddUserToTask({ user, task, availableUsers }) {
    const [selectedUser, setSelectedUser] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("/api/add-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: user.user_id,
                task_id: task.task_id,
                selected_user_id: selectedUser
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
            <h2>Add user to task</h2>

            <select
                value={selectedUser}
                onChange={e => setSelectedUser(e.target.value)}
                required
            >
                <option value="">Select user</option>

                {availableUsers.map(person => (
                    <option key={person.user_id} value={person.user_id}>
                        {person.name}
                    </option>
                ))}
            </select>

            <button type="submit">Assign user</button>
        </form>
    );
}
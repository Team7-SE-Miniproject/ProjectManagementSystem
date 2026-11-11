"use client";

import { useEffect, useState } from "react";

export default function TaskCard({ task, user }) {
    const [status, setStatus] = useState(task.status || "pending");
    const [currentStatus, setCurrentStatus] = useState(
        task.status || "pending"
    );
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        setStatus(task.status || "pending");
        setCurrentStatus(task.status || "pending");
    }, [task.status]);

    // Only admins, this task's project manager, and this task's manager
    // are allowed to update its status.
    const canUpdateStatus =
        user?.role === "admin" ||
        (
            user?.role === "project manager" &&
            Number(user.project_id) === Number(task.project_id)
        ) ||
        (
            user?.role === "task manager" &&
            Number(user.task_id) === Number(task.task_id)
        );

    async function updateStatus() {
        if (!canUpdateStatus) {
            alert("You are not allowed to update this task.");
            return;
        }

        try {
            const userId = user?.user_id;

            if (!userId) {
                throw new Error("Could not identify the logged-in user");
            }

            setSaving(true);

            const response = await fetch(
                `/api/task/${task.task_id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        user_id: userId,
                        status
                    })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Could not update task status");
            }

            setCurrentStatus(result.task.status);
            setStatus(result.task.status);

            alert("Task status updated successfully!");

        } catch (error) {
            console.error("Update status error:", error);
            alert(error.message || "Could not update task status");

        } finally {
            setSaving(false);
        }
    }

    return (
        <div className="card">
            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <p>
                Current Status:{" "}
                <span className="status">{currentStatus}</span>
            </p>

            <h3>Task Manager</h3>

            {task.manager ? (
                <p>{task.manager.name}</p>
            ) : (
                <p>No task manager assigned.</p>
            )}

            <h3>Assigned Users</h3>

            {task.assignedUsers?.length > 0 ? (
                task.assignedUsers.map(assignedUser => (
                    <p key={assignedUser.user_id}>
                        {assignedUser.name}
                    </p>
                ))
            ) : (
                <p>No users assigned yet.</p>
            )}

            {canUpdateStatus && (
                <>
                    <hr />

                    <h3>Update Status</h3>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>

                    <button
                        onClick={updateStatus}
                        disabled={saving || status === currentStatus}
                    >
                        {saving ? "Updating..." : "Update"}
                    </button>
                </>
            )}
        </div>
    );
}

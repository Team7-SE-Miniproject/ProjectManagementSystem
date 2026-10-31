"use client";

import { useEffect, useState } from "react";

import ProjectRedirectCard from "@/components/ProjectRedirectCard";
import TaskCard from "@/components/TaskCard";
import AddUserToTask from "@/components/AddUserToTask";

export default function TaskPage({ params }) {
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTask() {
            try {
                const storedUser = sessionStorage.getItem("user");

                if (!storedUser) {
                    window.location.href = "/login";
                    return;
                }

                const currentUser = JSON.parse(storedUser);
                setUser(currentUser);

                const { id } = await params;

                const response = await fetch(
                    `/api/task/${id}?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || "Could not load task");
                }

                setData(result);

            } catch (error) {
                console.error("Task page error:", error);
                alert(error.message || "Could not load task");
            } finally {
                setLoading(false);
            }
        }

        loadTask();
    }, [params]);

    if (loading) return <p>Loading task...</p>;
    if (!data || !user) return <p>Task unavailable.</p>;

    const task = data.task;

    // Show the add-user form only to users who are allowed to manage this task.
    const canAddUsers =
        user.role === "admin" ||
        (
            user.role === "project manager" &&
            Number(user.project_id) === Number(task.project_id)
        ) ||
        (
            user.role === "task manager" &&
            Number(user.task_id) === Number(task.task_id)
        );

    return (
        <main>
            <ProjectRedirectCard project={data.project} />

            <TaskCard task={task} />

            {canAddUsers && (
                <AddUserToTask
                    user={user}
                    task={task}
                    availableUsers={data.availableUsers || []}
                />
            )}
        </main>
    );
}

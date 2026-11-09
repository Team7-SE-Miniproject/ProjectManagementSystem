
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
                const { id } = await params;

                // Get the latest user information from the database.
                const dashboardResponse = await fetch(
                    `/api/dashboard?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const dashboardData = await dashboardResponse.json();

                if (!dashboardResponse.ok) {
                    throw new Error(dashboardData.error);
                }

                setUser(dashboardData.user);

                // Get task details.
                const response = await fetch(
                    `/api/task/${id}?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.error || "Could not load task"
                    );
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

    // Admin can manage any task.
    const isAdmin = user.role === "admin";

    // Project manager can manage tasks in their project.
    const isProjectManager =
        user.role === "project manager" &&
        Number(user.project_id) === Number(task.project_id);

    // Task manager can manage their assigned task.
    const isTaskManager =
        user.role === "task manager" &&
        Number(user.task_id) === Number(task.task_id);

    const canAddUsers =
        isAdmin || isProjectManager || isTaskManager;

    return (
        <main>
            <ProjectRedirectCard project={data.project} />

            <TaskCard task={task} user={user} />

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

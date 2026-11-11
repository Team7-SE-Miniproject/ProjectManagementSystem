
"use client";

import { useEffect, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import ProjectRedirectCard from "@/components/ProjectRedirectCard";
import TaskCard from "@/components/TaskCard";
import TaskRedirectCard from "@/components/TaskRedirectCard";

import AddProject from "@/components/AddProject";
import AddTaskToProject from "@/components/AddTaskToProject";
import AddUserToTask from "@/components/AddUserToTask";

export default function DashboardPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadDashboard() {
            try {
                const storedUser = sessionStorage.getItem("user");

                if (!storedUser) {
                    window.location.href = "/login";
                    return;
                }

                const currentUser = JSON.parse(storedUser);

                const response = await fetch(
                    `/api/dashboard?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error);
                }

                setData(result);

            } catch (error) {
                console.error("Dashboard error:", error);
                alert(error.message || "Could not load dashboard");

            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    if (loading) {
        return <p>Loading dashboard...</p>;
    }

    if (!data) {
        return <p>Could not load dashboard.</p>;
    }

    const { user } = data;

    return (
        <main>
            <h1>Dashboard</h1>

            <p className="page-subtitle">
                Welcome back, {user.name}.
                {" "}
                <span className="status">{user.role}</span>
            </p>

            {/* DEFAULT USER */}
            {user.role === "default" && (
                <>
                    {data.project && (
                        <ProjectRedirectCard
                            project={data.project}
                        />
                    )}

                    {data.task && (
                        <TaskRedirectCard
                            task={data.task}
                        />
                    )}
                </>
            )}

            {/* TASK MANAGER */}
            {user.role === "task manager" && (
                <>
                    {data.project && (
                        <ProjectRedirectCard
                            project={data.project}
                        />
                    )}

                    {data.task && (
                        <>
                            <TaskCard
                                task={data.task}
                                user={user}
                            />

                            <AddUserToTask
                                user={user}
                                task={data.task}
                                availableUsers={data.availableUsers || []}
                            />
                        </>
                    )}
                </>
            )}

            {/* PROJECT MANAGER */}
            {user.role === "project manager" && (
                <>
                    {data.project && (
                        <>
                            <ProjectCard
                                project={{
                                    ...data.project,
                                    tasks: data.tasks || []
                                }}
                            />

                            <AddTaskToProject
                                user={user}
                                project={data.project}
                                managers={data.availableManagers || []}
                            />
                        </>
                    )}
                </>
            )}

            {/* ADMIN */}
            {user.role === "admin" && (
                <>
                    {(data.projects || []).map(project => (
                        <ProjectRedirectCard
                            key={project.project_id}
                            project={project}
                        />
                    ))}

                    <AddProject
                        user={user}
                        managers={data.availableManagers || []}
                    />
                </>
            )}
        </main>
    );
}

"use client";

import { useEffect, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import ProjectRedirectCard from "@/components/ProjectRedirectCard";
import TaskCard from "@/components/TaskCard";
import TaskRedirectCard from "@/components/TaskRedirectCard";

import AddProject from "@/components/AddProject";
import AddTaskToProject from "@/components/AddTaskToProject";
import AddUserToTask from "@/components/AddUserToTask";

export default function Dashboard() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadDashboard() {
            try {
                const storedUser = sessionStorage.getItem("user");

                if (!storedUser) {
                    window.location.href = "/login";
                    return;
                }

                const user = JSON.parse(storedUser);

                const response = await fetch(
                    `/api/dashboard?user_id=${encodeURIComponent(user.user_id)}`,
                    {
                        method: "GET",
                        cache: "no-store"
                    }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.error || `Request failed: ${response.status}`
                    );
                }

                setData(result);

            } catch (err) {
                console.error("Dashboard error:", err);
                setError(err.message || "Could not load dashboard");
            } finally {
                setLoading(false);
            }
        }

        loadDashboard();
    }, []);

    if (loading) {
        return <p>Loading dashboard...</p>;
    }

    if (error) {
        return <p>Dashboard error: {error}</p>;
    }

    if (!data) {
        return <p>Could not load dashboard.</p>;
    }

    const { user } = data;

    return (
        <main>
            <h1>Welcome, {user.name}</h1>
            <p>Role: {user.role}</p>

            {/* Default user */}
            {user.role === "default" && (
                <>
                    <h2>Your project</h2>
                    <ProjectRedirectCard project={data.project} />

                    <h2>Your task</h2>
                    <TaskRedirectCard task={data.task} />
                </>
            )}

            {/* Task manager */}
            {user.role === "task manager" && (
                <>
                    <h2>Your project</h2>
                    <ProjectRedirectCard project={data.project} />

                    <h2>Your task</h2>
                    <TaskCard task={data.task} />

                    {data.task && (
                        <AddUserToTask
                            user={user}
                            task={data.task}
                            availableUsers={data.availableUsers || []}
                        />
                    )}
                </>
            )}

            {/* Project manager */}
            {user.role === "project manager" && (
                <>
                    <ProjectCard
                        project={{
                            ...data.project,
                            tasks: data.tasks || []
                        }}
                    />

                    {data.project && (
                        <AddTaskToProject
                            user={user}
                            project={data.project}
                            managers={data.availableManagers || []}
                        />
                    )}
                </>
            )}

            {/* Admin */}
            {user.role === "admin" && (
                <>
                    <h2>All projects</h2>

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
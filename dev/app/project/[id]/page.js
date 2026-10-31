
"use client";

import { useEffect, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import AddTaskToProject from "@/components/AddTaskToProject";

export default function ProjectPage({ params }) {
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            try {
                const storedUser = sessionStorage.getItem("user");

                if (!storedUser) {
                    window.location.href = "/login";
                    return;
                }

                const currentUser = JSON.parse(storedUser);
                const { id } = await params;

                // Fetch the current user and available managers.
                const dashboardResponse = await fetch(
                    `/api/dashboard?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const dashboardData = await dashboardResponse.json();

                if (!dashboardResponse.ok) {
                    throw new Error(dashboardData.error);
                }

                // Use the database version of the user, not sessionStorage.
                setUser(dashboardData.user);

                // Fetch project details.
                const response = await fetch(
                    `/api/project/${id}?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error);
                }

                setData({
                    ...result,
                    availableManagers:
                        dashboardData.availableManagers || []
                });

            } catch (error) {
                console.error("Project loading error:", error);
                alert(error.message || "Could not load project");
            } finally {
                setLoading(false);
            }
        }

        loadProject();
    }, [params]);

    if (loading) return <p>Loading project...</p>;
    if (!data || !user) return <p>Project unavailable.</p>;

    const canAddTask =
        user.role === "admin" ||
        (
            user.role === "project manager" &&
            Number(user.project_id) === Number(data.project.project_id)
        );

    return (
        <main>
            <ProjectCard project={data.project} />

            {canAddTask && (
                <AddTaskToProject
                    user={user}
                    project={data.project}
                    managers={data.availableManagers}
                />
            )}
        </main>
    );
}

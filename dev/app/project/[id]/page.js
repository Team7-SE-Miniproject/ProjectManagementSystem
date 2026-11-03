
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProjectCard from "@/components/ProjectCard";
import AddTaskToProject from "@/components/AddTaskToProject";

export default function ProjectPage() {
    const params = useParams();
    const id = params.id;

    const [data, setData] = useState(null);
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

                const response = await fetch(
                    `/api/project/${id}?user_id=${currentUser.user_id}`,
                    { cache: "no-store" }
                );

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error);
                }

                setData(result);

            } catch (error) {
                console.error("Project loading error:", error);
                alert(error.message || "Could not load project");

            } finally {
                setLoading(false);
            }
        }

        loadProject();
    }, [id]);

    if (loading) {
        return <p>Loading project...</p>;
    }

    if (!data) {
        return <p>Could not load project.</p>;
    }

    const { user, project, availableManagers } = data;

    const canAddTask =
        user.role === "admin" ||
        (
            user.role === "project manager" &&
            Number(user.project_id) === Number(project.project_id)
        );

    return (
        <main>
            <ProjectCard project={project} />

            {canAddTask && (
                <AddTaskToProject
                    user={user}
                    project={project}
                    managers={availableManagers || []}
                />
            )}
        </main>
    );
}

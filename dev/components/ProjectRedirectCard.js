import Link from "next/link";

export default function ProjectRedirectCard({ project }) {
    if (!project) return  <p>No project assigned.</p>;

    return (
        <Link href={`/project/${project.project_id}`}>
            <div>
                <h2>{project.name}</h2>
            </div>
        </Link>
    );
}
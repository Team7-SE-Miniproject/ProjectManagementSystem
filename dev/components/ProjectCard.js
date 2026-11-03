
import TaskRedirectCard from "./TaskRedirectCard";

export default function ProjectCard({ project }) {
    return (
        <div className="card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>

            <h3>Project Manager</h3>

            {project.manager ? (
                <p>{project.manager.name}</p>
            ) : (
                <p>No project manager assigned.</p>
            )}

            <h3>Tasks in this project</h3>

            {project.tasks?.length > 0 ? (
                project.tasks.map(task => (
                    <TaskRedirectCard
                        key={task.task_id}
                        task={task}
                    />
                ))
            ) : (
                <p>No tasks assigned yet.</p>
            )}

            <h3>Project users</h3>

            {project.users?.length > 0 ? (
                project.users.map(user => (
                    <p key={user.user_id}>{user.name}</p>
                ))
            ) : (
                <p>No users assigned.</p>
            )}
        </div>
    );
}

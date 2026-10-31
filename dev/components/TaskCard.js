export default function TaskCard({ task }) {
    if (!task) return null;

    return (
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status || "Not set"}</p>

            <h3>Task manager</h3>
            <p>{task.manager?.name || "Not assigned"}</p>

            <h3>Assigned users</h3>

            {task.users?.length > 0 ? (
                task.users.map(user => (
                    <p key={user.user_id}>{user.name}</p>
                ))
            ) : (
                <p>No users assigned.</p>
            )}
        </div>
    );
}
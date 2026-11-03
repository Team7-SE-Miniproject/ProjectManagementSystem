
export default function TaskCard({ task }) {
    return (
        <div>
            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>

            <h3>Task Manager</h3>

            {task.manager ? (
                <p>{task.manager.name}</p>
            ) : (
                <p>No task manager assigned.</p>
            )}

            <h3>Assigned Users</h3>

            {task.assignedUsers?.length > 0 ? (
                task.assignedUsers.map(user => (
                    <p key={user.user_id}>{user.name}</p>
                ))
            ) : (
                <p>No users assigned yet.</p>
            )}
        </div>
    );
}

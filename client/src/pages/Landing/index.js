import { useQuery } from "@apollo/client";

import { GET_TASKS } from "./queries";

export default function Landing() {
    const { data, error, loading } = useQuery(GET_TASKS);

    return (
        <>
            <h1>Task Manager</h1>

            {/* Kinda cool */}
            {loading && <p>Loading...</p>}

            <div className="tasks">
                {data?.getTasks.map((task, index) => (
                    <div key={index}>
                        <p>Task: {task.text}</p>
                        <p>Username: {task.username}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
import { useQuery } from "@apollo/client";

import { GET_TASKS, GET_TASK } from "./queries";
import { useState } from "react";

export default function Landing() {
    const [id, setId] = useState("64d6577bd048464a897fcce3");
    const { data, error, loading } = useQuery(GET_TASKS);
    const { data: getTaskData } = useQuery(GET_TASK, {
        variables: {
            id
        }
    });

    if (getTaskData) console.log(getTaskData);

    return (
        <>
            <h1>Task Manager</h1>

            {/* Kinda cool */}
            {loading && <p>Loading...</p>}

            {error && <p className="error">{error}</p>}

            {
                // The second ? wasn't necessary for JD, but for some reason my code needs it
                <p>{getTaskData?.getTask?.username}</p>
            }

            <input type="text" placeholder="Enter task id" onChange={e => setId(e.target.value)} />

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
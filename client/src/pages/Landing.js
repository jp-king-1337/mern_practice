import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react";

const GET_TASKS = gql`
query {
    getTasks {
        _id
        text
        username
    }
}
`;

function Landing() {
    const { data, error, loading, refetch } = useQuery(GET_TASKS);

    useEffect(() => {
        refetch();
    }, [data]);

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

export default Landing;

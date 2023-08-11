import { gql, useQuery } from "@apollo/client";

const GET_TASKS = gql`
query {
    getTasks {
        _id
        text
        username
    }
}
`;

export default function Landing() {
    const { data, error, loading, refetch } = useQuery(GET_TASKS);

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
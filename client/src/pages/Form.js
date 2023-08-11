import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_TASK = gql`
    mutation AddTask($username: String!, $text: String!) {
        addTask(username: $username, text: $text) {
            _id
            text
            username
        }
    }
`;

export default function Form() {
    const [addTask, { data, error }] = useMutation;
    const [formData, setFormData] = useState({
        taskText: "",
        username: ""
    });

    if (data) console.log(data);

    if (error) console.log(error);

    const handleInputChange = e => {
        const prop = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [prop]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        addTask({
            variables: formData
        });

        setFormData({
            taskText: "",
            username: "",
        });
    };

    return (
        <>
            <h1>Add a Task</h1>

            <form onSubmit={handleSubmit}>
                <input name="username" value={formData.username} type="text" onChange={handleInputChange} placeholder="Enter your username" />
                <input name="taskText" value={formData.taskText} type="text" onChange={handleInputChange} placeholder="Enter your todo text" />
                <button>Submit</button>
            </form>
        </>
    )
}
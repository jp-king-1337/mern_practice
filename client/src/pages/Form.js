import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

import { GET_TASKS } from "./Landing/queries";

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
    const [addTask, { data, error}] = useMutation(ADD_TASK, {
        refetchQueries: [{ query: GET_TASKS }]
    });
    const [formData, setFormData] = useState({
        text: "",
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
            text: "",
            username: "",
        });
    };

    return (
        <>
            <h1>Add a Task</h1>

            {data && <p>New task with id {data.addTask._id} added successfully!</p>}

            <br />

            <form onSubmit={handleSubmit}>
                <input name="username" value={formData.username} type="text" onChange={handleInputChange} placeholder="Enter your username" />
                <input name="text" value={formData.text} type="text" onChange={handleInputChange} placeholder="Enter your todo text" />
                <button>Submit</button>
            </form>
        </>
    )
}
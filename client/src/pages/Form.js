import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_TASK = gql`
    mutation AddTask($username: String!, $text: String!) {
        
    }
`;

export default function Form() {
    const [formData, setFormData] = useState({
        taskText: "",
        username: ""
    });

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
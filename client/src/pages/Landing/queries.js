import { gql } from "@apollo/client";

export const GET_TASKS = gql`
    query {
        getTasks {
            _id
            text
            username
        }
    }
`;

export const GET_TASK = gql`
    query GetTask($id: String!) {
        getTask(id: $id) {
            _id
            text
            username
        }
    }
`;
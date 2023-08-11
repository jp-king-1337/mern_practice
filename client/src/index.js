import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { StoreProvider } from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://127.0.0.1:3333/graphql",
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <StoreProvider>
                    <App />
                </StoreProvider>
            </Router>
        </ApolloProvider>,
    </React.StrictMode>
);
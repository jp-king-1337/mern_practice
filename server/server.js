const express = require("express");

const app = express();
const PORT = process.env.PORT || 3333;

// import typeDefs and resolvers

app.use(express.json());

// Setup our Apollo GraphQL server

app.listen(PORT, () => console.log("Server started on port %s", PORT));
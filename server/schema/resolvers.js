const Task = require("../models/Task")

module.exports = {
    Query: {
        sayHello() {
            return "Hello there!";
        },
        async getTasks() {
            const tasks = await Task.find();

            return tasks;
        }
    },
}
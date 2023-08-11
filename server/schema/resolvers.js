const Task = require("../models/Task")

module.exports = {
    Query: {
        async getTasks() {
            const tasks = await Task.find();

            return tasks;
        },
        async getTask(_, args, context) {
            console.log("Args: ", args);
            // console.log(context);
            const task = await Task.findById(args.id);

            return task;
        }
    },

    Mutation: {
        async addTask(_, args) {
            const task = await Task.create(args);

            return task;
        }
    }
}
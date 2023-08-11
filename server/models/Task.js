const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Task = model("Task", taskSchema);

// Clears tasks and reseeds with two generic tasks
// Task.deleteMany({})
//     .then(() => console.log("Tasks deleted."))
//     .then(() => {
//         Task.insertMany([
//             {
//                 text: "Task one",
//                 username: "JP"
//             },
//             {
//                 text: "Task two",
//                 username: "Phil"
//             }
//         ]).then(() => console.log("Tasks seeded."));
//     });

module.exports = Task;
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./Model/Todo.js";

// Connect to MongoDB
let conn = await mongoose.connect("mongodb://localhost:27017/todo");

// Create an Express app
const app = express();
const port = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    // Create a new Todo and save it to the database
    const todo = new Todo({
        title: "Hey first todo",
        desc: "Description of this Todo",
        isDone: "false",
        days: Math.floor(Math.random() * 45 + 5 * Math.random())
    });
    todo.save();
    res.send('Hello World!');
});

/*
// Example route that retrieves a Todo from the database
app.get('/a', async (req, res) => {
    // Find one Todo from the database
    let todo = await Todo.findOne({});
    console.log("todo is running");
    // Send JSON response with Todo details
    res.json({ title: todo.title, desc: todo.desc });
});
*/

// Start the Express app
app.listen(port, () => {
    console.log(`Your server is running successfully ${port}`);
});

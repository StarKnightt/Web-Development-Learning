import mongoose from "mongoose";
import  express  from "express";
import { Todo } from "./Model/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    const todo = new Todo({title: "Hey first todo", desc: "Description of this Todo", 
    isDone: "false",days:Math.floor(Math.random()*45 + 5*Math.random())})
    todo.save()
    res.send('Hello World!')
})
// app.get('/a', async (req, res) => {
//    let todo = await Todo.findOne({})
//    console.log("todo is running");
//    res.json({title: todo.title, desc: todo.desc})
// })

app.listen(port, () => {
  console.log(`Your server is running successfully ${port}`)
})
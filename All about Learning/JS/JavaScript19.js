// Synchronous or blocking
// - line by line code execution

// Asynchronous or non-blocking
// - callbacks will fire, no line by line code execution

const fs = require("fs");
let text = fs.readFile("hello.txt", "utf-8", (err,data)=>{
    console.log(data);
});
console.log("this is a message"); // it will print first, then after the call back function rest will print
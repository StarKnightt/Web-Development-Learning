 // Import the 'fs' module
// const fs = require("fs");

 // Read the content of the file named 'hello.txt' synchronously with encoding 'utf-8'
// const text = fs.readFileSync("hello.txt", "utf-8");

 // Output the content of the file to the console
// console.log("The content of the file is:");
// console.log(text);


const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("browser", "Harry");
console.log("The content of the file is:");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("harry.txt", text);

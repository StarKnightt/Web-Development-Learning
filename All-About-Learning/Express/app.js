// importing the Express Module
const express = require("express");

// made an app using express
const app = express();

//want to run in port 80
const port = 80;

app.get("/",(req, res)=>{  // get request in '/' endpoint
    res.send("this is my homepage with first express app writing with Harish bhaiaya");
});

app.get("/about", (req, res)=>{  // in get method, want to get request in '/about' endpoint
    res.send("This is about page my first express app with Harish");
});

app.post("/about", (req, res)=>{ // in post method, want to get request in '/about' endpoint
    res.send("This is a post request about page my first express app with Harish");
});

app.listen(port, ()=>{  // to listen the app on a port
    console.log(`The application started running successfully on the port ${port}`);
});
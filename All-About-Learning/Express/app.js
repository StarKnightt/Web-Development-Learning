// importing the Express Module
const express = require("express");

// made an app using express
const app = express();

//want to run in port 80
const port = 80;

app.get("/",(req, res)=>{  // get request in '/' endpoint
    res.send("this is my homepage with first express app writing with Harish bhaiaya");
});

// To send the status code
app.get("/",(req, res)=>{  // get request in '/' endpoint
    res.status(200).send("this is my homepage with first express app writing with Harish bhaiaya");
});

app.get("/about", (req, res)=>{  // in get method, want to get request in '/about' endpoint
    res.send("This is about page my first express app with Harish");
});

app.post("/about", (req, res)=>{ // in post method, want to get request in '/about' endpoint
    res.send("This is a post request about page my first express app with Harish");

});
app.get("/this", (req, res)=>{  // to display page not found
    res.status(404).send("This page is not found");
});

app.post("/hello", (req, res)=>{ // To display no content
    res.status(204).send("No content are available here");
});

app.get("/display", (req, res)=>{ // To display no content
    res.status(201).send("The request was successfull, a new resource created");
});

app.listen(port, ()=>{  // to listen the app on a port
    console.log(`The application started running successfully on the port ${port}`);
});

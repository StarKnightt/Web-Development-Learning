// NORMAL ROUTING IN EXPRESS JS

// importing the Express Module
const express = require("express");

//importing the path module, by using it we can set path and route the easily :D
const path = require("path");

// made an app using express
const app = express();

//want to run in port 80
const port = 80;

// for serving static files
app.use('/static', express.static('static'));  // Here "static is the directory folder name"

// Set the template engine as pug
app.set('view engine', 'pug');

// set the views directory
app.set('views', path.join(__dirname,'views'))

// Our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Harish bhaiya', message: 'Hello there and thanks for telling me how to use Code!' })
  });

app.get("/",(req, res)=>{  // get request in '/' endpoint
    res.send("This is my homepage with first express app writing with Harish bhaiaya");
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

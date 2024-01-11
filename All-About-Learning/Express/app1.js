const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.get('/static',(req,res)=>{
    res.status(200).sendFile('style.css');
})

app.use(express.urlencoded({extended:true}))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directoryk

// ENDPOINT
app.get('/', (req, res) => {
    const con = "This is the best thing I'm learning";
    const param = { 'title': 'Pug is the best theme', "content": con };
    res.status(200).render('index',param);
})
app.post('/', (req, res) => {
    // Extracting data from the request body
    const { name, age, address, more } = req.body;

    // Creating a string to write to the file
    let outputToWrite = `The name of the client is ${name}, 
    ${age} years old, 
    residing at ${address}, 
    More about him/her: ${more}`;

    // Writing data to the file 'output.txt'
    fs.writeFileSync('output.txt', outputToWrite);

    // Rendering a response to the client
    const param = { 'message': 'yes, its working' };
    res.status(200).render('index', param);
});

app.listen(port, () => { // to listen the app on a port
    console.log(`The application started running successfully on the port ${port}`);
});
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.get('/static',(req,res)=>{
    res.status(200).render('style.css');
})

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINT
app.get('/', (req, res) => {
    const con = "This is the best thing I'm learning";
    const param = { 'title': 'Pug is the best theme', "content": con };
    res.status(200).render('index',param);
})


app.listen(port, () => { // to listen the app on a port
    console.log(`The application started running successfully on the port ${port}`);
});

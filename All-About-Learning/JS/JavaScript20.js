// Setting up Module
const http = require('http'); // Creating http server
const fs = require('fs'); // reading the content of the file
const fileContent = fs.readFileSync('D:\\Web-Development-Learning\\All about Learning\\JS\\JavaScript15.html');
// We have to also give the file pathe while declaring file content on above :)
const filePath = 'D:\\Web-Development-Learning\\All about Learning\\JS\\JavaScript15.html';
// Never forget to add absolute path while you have to serve your file in other location :) 
const server = http.createServer((req, res)=>{  // Creating Server with funciton (req,res), res = response;
    // Server Logic
    res.writeHead(200, {'Conent-type':'text/html'}); // it is used to set the http response Headers
    res.end(fileContent); // It is used to send the response data to the client and finish the response
})
//  telling the server to start listening on port 80 of the local machine ('127.0.0.1')
server.listen(80, '127.0.0.1', ()=> {
    console.log("Listening on port 80");
});
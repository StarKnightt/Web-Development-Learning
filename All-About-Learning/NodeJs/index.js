const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const contact = fs.readFileSync('D:\\Web-Development-Learning\\All-about-Learning\\NodeJs\\home.html');
const about = fs.readFileSync('D:\\Web-Development-Learning\\All-about-Learning\\NodeJs\\about.html');
const home = fs.readFileSync('D:\\Web-Development-Learning\\All-about-Learning\\NodeJs\\index.html');
const services = fs.readFileSync('D:\\Web-Development-Learning\\All-about-Learning\\NodeJs\\services.html');

const port = 3000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
  const url = req.url;  // we need to store the url :)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/') {
        res.end(home);
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1> 404 Error not found");
    }
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
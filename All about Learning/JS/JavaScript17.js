// console.log("Hello World");
const http = require('http');  // it's a module
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {  // it is a function used to create server, which takes two arguments req and res
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World This is Prasenjit Nayak');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Shadows</title>
      <link rel="stylesheet" href="Shadow.css">
  </head>
  <body>
      <div class="container">
          <div class="card" id="card-1">
             <h2>This is Java Course</h2> 
             <p>I have started Web devlopement course that doesn't mean it will stop. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, atque molestiae quas, dicta explicabo assumenda voluptates voluptate, ipsa in inventore voluptatum ipsum consequatur maxime accusamus!</p>
          </div>
          <div class="card" id="card-2">
             <h2>This is HTML course</h2> 
             <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea, totam quo veniam pariatur autem quisquam. Suscipit necessitatibus expedita officiis quos? In aliquid quod ea.</P>
          </div>
          <div class="card" id="card-3">
             <h2>Card 3</h2> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos voluptate voluptatibus nihil ea voluptas consequatur neque eveniet aliquam. Ipsa perferendis laboriosam provident ratione dolorem laudantium.</p>
          </div>
      </div>
  </body>
  </html>`);
});
server.listen(port, hostname, () => {   // Listening on port which is created on above
  console.log(`Server running at http://${hostname}:${port}/`);
});
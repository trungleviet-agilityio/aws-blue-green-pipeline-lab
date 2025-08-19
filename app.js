const http = require('http');
const hostname = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT || '8080', 10);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, AWS CodePipeline!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

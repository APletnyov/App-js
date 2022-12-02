const http = require('http');

//++ HW 2, commented this
// const hostname = '127.0.0.1';
// const port = 3000;
const os = require("os");
const userInfo = os.userInfo();
const uid = userInfo.uid;
const hostname = '0.0.0.0';
const port = 1000 + uid;
//--

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
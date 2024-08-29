##Introduction to node.js
Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8
Engine).

##What is Node.js?
Node.js is an open source server environment
Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
Node.js uses JavaScript on the server

##How to run node.js? and sample code
To run node.js, you need to install node.js in your system. You can download it
from [here](https://nodejs.org/en/download/)
After installing node.js, you can run the following code in your terminal
```javascript
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```
This code creates a web server that listens to port 8080 and returns a response
with "Hello World!".



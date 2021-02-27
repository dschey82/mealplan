'use strict';
var http = require('http');
var port = 80;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Not even a World!\n');
}).listen(port);

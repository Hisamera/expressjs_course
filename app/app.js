var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<h1>Roux Academy Meetups</h1>');
});

var server = app.listen(3000, function() {
    console.log("Listening on port 3000");
});

// var http = require('http');

// var myServer = http.createServer(function(request, response) {
//     response.writeHead(200, {"Content-Type": "text/html"});

//     response.write('<h1>Roux Meetups</h1>');
//     response.end();
// });

// myServer.listen(3000);
// console.log("Server is running on 127.0.0.1:3000");
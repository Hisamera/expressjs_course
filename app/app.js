var http = require('http');

var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});

    response.write('<h1>Roux Meetups</h1>');
    response.end();
});

myServer.listen(3000);
console.log("Server is running on 127.0.0.1:3000")
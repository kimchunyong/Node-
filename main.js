const http = require('http');
const fs = require('fs');

const createServer = (server, port) => {
    http.createServer(server).listen(port);
}

const appServer = (request, response) => {
    const url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
}

createServer(appServer, 3000);
createServer(appServer, 5000);


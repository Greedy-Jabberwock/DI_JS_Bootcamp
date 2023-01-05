const http = require('http');

const HOST = 'localhost';
const PORT = 3000;
const server_address = `http://${HOST}:${PORT}`;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<h1>This is my first responce</h1>\
            <h2>This is my second responce</h2>\
            <div>This is my third responce</div>');

});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${server_address}`);
});
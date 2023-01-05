const http = require('http');


const HOST = 'localhost';
const PORT = 8080;
const server_address = `http://${HOST}:${PORT}`;

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(user));

});

server.listen(PORT, HOST, () => {
    console.log(`Server is running on ${server_address}`);
});
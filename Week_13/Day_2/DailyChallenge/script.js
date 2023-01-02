// ---------- Part I ---------------

const main_module = require('./main.js');
const b = 5;

console.log(main_module.large_num + b);

// ---------- Part II --------------

const http = require('http');
const host = 'localhost';
const port3000 = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html>
                <body>
                    <h1>Hi, there at the frontend</h1>
                    <p>My module is ${main_module.large_num + b}<p>    
                </body>
            </html>`);
});
server.listen(port3000, host, () => {
    console.log(`Server is running on http://${host}:${port3000}`);
});

// ------------ Part III ---------------

const port8080 = 8080;

const server_pIII = http.createServer((request, responce) => {
    responce.setHeader('Content-Type', 'text/html');
    responce.writeHead(200);
    responce.end(`<p>${main_module.current_date}</p>`)
}); 
server_pIII.listen(port8080, host, () => {
    console.log(`Server is running on http://${host}:${port8080}`);
});

// 16:43 -
const express = require('express');
// const body_parser = require('body-parser');

const app = express();

const HOST = 'localhost';
const PORT = 8080;
const URL = `http://${HOST}:${PORT}`;

app.listen(PORT, HOST, () => console.log(`Running: ${URL}`));
app.use(express.json());

// ---------- /home -------------------
app.use(['/', '/home'], express.static(`${__dirname}/public/home`));


// ---------- /register ---------------
app.use('/register', express.static(`${__dirname}/public/register`));
app.post('/register', (req, res) => {
    console.log('Request is gotten');
    const data = req.body;
    console.log(data);
})

// ---------- /login ------------------
app.use('/login', express.static(`${__dirname}/public/login`));

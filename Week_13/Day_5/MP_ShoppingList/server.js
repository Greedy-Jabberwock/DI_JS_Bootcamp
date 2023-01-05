const express = require('express');
const body_parser = require('body-parser');

const app = express();

const PORT = 8080;
const HOST = 'localhost';
const URL = `http://${HOST}:${PORT}`

const products = {};

app.listen(PORT, HOST, () => console.log(`Running: ${URL}`));

app.use('/', express.static(`${__dirname}/public`));
app.use(body_parser.json());

app.get('/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(products);
})

app.post('/add', (req, res) => {
    console.log(req.body);
    let product = req.body.product.toLowerCase();
    let amount = parseInt(req.body.amount);
    if (Object.keys(products).includes(product)) {
        products[product] += amount;
    } else {
        products[product] = amount;
    };
    res.send('Added')
});
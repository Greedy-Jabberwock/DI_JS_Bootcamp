const express = require('express');
const products = require('./products_module.js');

const app = express();
const port = 8080;
const host = 'localhost';
const server_address = `http://${host}:${port}`;

app.listen(port, host, () => {
    console.log(`Running on ${server_address}`);
});

app.use(['/', '/home'], express.static(`${__dirname}/public/index`));

app.get('/login', (req, res) => {
    res.send('Welcome to server');
});

// ------------------------


app.use('/products', express.static(`${__dirname}/public/products`));

app.get('/api/products', (req, res) => {
    res.json(products.products);
})

// -------------------------

app.get('/api/search/:product_id', (req, res)=>{
    console.log(req.params);
    const product = products.products.find(item => {
        return item.id == req.params.product_id;
    })
    res.send([product]);
})
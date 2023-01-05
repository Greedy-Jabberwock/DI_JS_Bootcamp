const express = require('express');
const app = express();

const credentials = {
    PORT: 3000,
    HOST: 'localhost'
};

const user = {
    firstname: 'John',
    lastname: 'Doe'
};

app.listen(credentials.PORT, credentials.HOST, () => {
    console.log(`Server is running on http://${credentials.HOST}:${credentials.PORT}`);
});


// Exercise 1
//app.use(['/', '/home'], express.static(`${__dirname}/public/Exs_1`));

// app.get('/api/getUser', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.writeHead(200);
//     res.end(JSON.stringify(user));
// })
//----------------------------------------
// Exercise 2
// app.get('/:id', (req, res) => {
//     const params = req.params;
//     res.setHeader('Content-Type', 'application/json');
//     console.log(params);
//     res.send(params);
// });
// ---------------------------------------
// Exercise 3
app.use('/', express.static(`${__dirname}/public/Exs_3`));


module.exports = {
    app: app,
    address: `http://${credentials.HOST}:${credentials.PORT}`
}; 
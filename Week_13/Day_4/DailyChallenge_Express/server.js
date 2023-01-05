const express = require('express');
const app = express();

const credentials = {
    PORT: 8080,
    HOST: "localhost"
};

app.listen(credentials.PORT, credentials.HOST, () => {
    const server_address = `http://${credentials.HOST}:${credentials.PORT}`
    console.log(`Server is running on ${server_address}`);
});

app.get('/aboutMe/:hobby', (req, res) => {
    const params = req.params;
    console.log('req.params: ', params)
    res.send(`<h2>Your hobby is '${params.hobby}'</h2>`);
});

app.use('/pic', express.static(`${__dirname}/public/picture`));

app.use('/form', express.static(`${__dirname}/public/form`));

app.get('/formData', (req, res) => {

    res.send(`<div><b>${req.query.email}</b> send you a message:</div>
    <blockquote>"${req.query.message}"</blockqoute>`);
})
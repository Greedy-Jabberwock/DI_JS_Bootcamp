const express = require('express');
const app = express();

const credentials = {
    PORT: 8080,
    HOST: "localhost"
};

const onlyLetters = (str) => {
    let str_arr = str.split('')
    str_arr = str_arr.filter(item => item.match(/[a-zA-Z]/g))
    return str_arr.length == str.length
}

app.listen(credentials.PORT, credentials.HOST, () => {
    const server_address = `http://${credentials.HOST}:${credentials.PORT}`
    console.log(`Server is running on ${server_address}`);
});

app.get('/aboutMe/:hobby', (req, res) => {
    const params = req.params;
    console.log('req.params: ', params)
    if (onlyLetters(params.hobby)) {
        res.status(200);
        res.send(`<h2>Your hobby is '${params.hobby}'</h2>`); 
    } else {
        res.status(400);
        res.send('<h1>400</h1><h3>Bad Request</h3>')
    }
    
});

app.use('/pic', express.static(`${__dirname}/public/picture`));

app.use('/form', express.static(`${__dirname}/public/form`));

app.get('/formData', (req, res) => {

    res.send(`<div><b>${req.query.email}</b> send you a message:</div>
    <blockquote>"${req.query.message}"</blockqoute>`);
})
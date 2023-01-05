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

app.use(['/', '/home'], express.static(`${__dirname}/public`));

module.exports = {
    app,
    user
}
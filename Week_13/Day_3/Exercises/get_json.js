const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (rq, rs) => rs.send('About page'));

app.listen(5000)
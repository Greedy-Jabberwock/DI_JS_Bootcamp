import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())

app.listen(3001, 'localhost', () => {
    console.log('Server is running on http://localhost:3001');
});

app.get('/api/hello', (req, res) => {
    res.send('Hello from Express')
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    const asnwer = `Server: I got your message, it was '${req.body.message}'`
    res.json(asnwer);
})
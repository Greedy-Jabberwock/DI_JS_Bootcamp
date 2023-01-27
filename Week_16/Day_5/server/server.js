import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tasks_router from './routes/tasks.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())

app.use('/api', tasks_router);

app.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(`Server: http://localhost:${process.env.SERVER_PORT}`);
})
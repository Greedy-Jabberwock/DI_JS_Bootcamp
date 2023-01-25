import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/pgdb.js';
import products_router from './routes/products.js'

dotenv.config();

const app = express();
app.use(cors());

app.use('/api/pro', products_router);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server runs on http://localhost:${process.env.PORT}`);
});


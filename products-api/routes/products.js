import express from 'express'
const router = express.Router();

import { _getAllProducts,_searchProduct, _addProduct } from '../controllers/products.js';

router.get('/all',_getAllProducts);
router.get('/search', _searchProduct);
router.post('/add', _addProduct)

export default router;

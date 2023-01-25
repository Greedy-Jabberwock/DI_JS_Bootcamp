import express  from "express";

const router = express.Router();

import { _getAllProducts } from "../controllers/products.js";

router.get('/all', _getAllProducts);

export default router;
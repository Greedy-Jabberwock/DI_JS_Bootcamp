import express from "express";

const router = express.Router();

import { _getTasks, _addTask, _removeTask } from "../controllers/tasks.js";

router.get('/tasks', _getTasks);
router.post('/add', _addTask);
router.post('/remove', _removeTask);

export default router;
import express = require('express');
import * as apiController from '../controllers/apiController';

const router = express.Router();

router.post('/addtask', apiController.tasks);
router.get('/todos', apiController.seeTasks);
router.put('/todo/mark/:id', apiController.markTrue);
router.get('/todo/:id', apiController.getTask);
router.put('/todo/:id', apiController.updateTodo);
router.delete('/todo/:id', apiController.deleteTodo);

export default router;

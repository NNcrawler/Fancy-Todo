const express = require('express');
const router = express.Router()
const ControllersTodolist = require('../controllers/todolist');

router.get('/unfinished/:token', ControllersTodolist.getAllUnfinished);
router.get('/finished/:token', ControllersTodolist.getAllFinished);
router.post('/', ControllersTodolist.createTodo);
router.put('/', ControllersTodolist.markAsFinished);
router.delete('/', ControllersTodolist.deleteTask);

module.exports = router;

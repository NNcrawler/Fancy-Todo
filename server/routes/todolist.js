const express = require('express');
const router = express.Router()
const ControllersTodolist = require('../controllers/todolist');

router.get('/all/:token', ControllersTodolist.getAllTask)
router.get('/unfinished/:token', ControllersTodolist.getByStatus('Not Done'));
router.get('/finished/:token', ControllersTodolist.getByStatus('Done'));
router.post('/', ControllersTodolist.createTodo);
router.put('/toggle', ControllersTodolist.toggleMark);
router.delete('/', ControllersTodolist.deleteTask);

module.exports = router;

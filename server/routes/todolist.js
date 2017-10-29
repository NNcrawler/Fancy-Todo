const express = require('express');
const router = express.Router()
const ControllersTodolist = require('../controllers/todolist');

router.get('/:username/unfinished', ControllersTodolist.getAllUnfinished);
router.get('/:username/finished', ControllersTodolist.getAllFinished);
router.post('/:username', ControllersTodolist.createTodo);
router.put('/:username', ControllersTodolist.markAsFinished);
router.delete('/:username', ControllersTodolist.deleteTask);

module.exports = router;

const express = require('express');
const router = express.Router();
const ControllerUser = require('../controllers/user');

router.post('/login', ControllerUser.login);
router.post('/register', ControllerUser.register);

module.exports = router;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const todolist = require('./routes/todolist');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//===========ROUtES HERE=============
app.use('/task', todolist)
//===================================

app.listen(process.env.port || 3000)

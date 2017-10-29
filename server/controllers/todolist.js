const Models = require('../models/all-models');
const jwtprocessor = require('../helpers/jwtprocessor');

class Controller{
  static createTodo(req, res, next){
    let title = req.body.title;
    let detail = req.body.detail;
    jwtprocessor.verify(req.body.token)
    .then(response=>{
      let email = response.email;
      return Models.User.findOne({email})
    })
    .then(response=>{
      response.todos.push({title, detail});
      return response.save()
    })
    .then(response=>{
      res.send('berhasil')
    })
    .catch(err=>{
      console.log(err);
      res.send({message:'gagal'})
    })


  }
  static getAllUnfinished(req, res, next){
    jwtprocessor.verify(req.params.token)
    .then(response=>{
      let email = response.email;
      return Models.User.findOne({email})
    })
    .then(response=>{
      let data = {
        message:'berhasil',
        todos:response.todos
      }
      res.send(data)
    })
    .catch(err=>{
      console.log(err);
      res.send({message:'gagal'})
    })
  }
  static getAllFinished(req, res, next){
    res.send('')
  }
  static markAsFinished(req, res, next){
    res.send('')
  }
  static deleteTask(req, res, next){
    res.send('')
  }
}

module.exports = Controller;

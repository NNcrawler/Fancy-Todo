const Models = require('../models/all-models');
const jwtprocessor = require('../helpers/jwtprocessor');
const mongoose = require('mongoose');

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
  static getAllTask(req, res, next){
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
      res.send({message:'gagal'})
    })
  }
  static getByStatus(status){
    return function(req, res, next){
      jwtprocessor.verify(req.params.token)
      .then(response=>{
        let email = response.email;
        return Models.User.findOne({email})
      })
      .then(response=>{
        let data={message:'berhasil'};
        if(response){
           data.todos=response.todos.filter((item) => {if(item.status === status){return item}});
        }else{
          data.todos =  []
        }
        res.send(data)
      })
      .catch(err=>{
        console.log(err);
        res.send({message:'gagal'})
      })
    }
  }
  static toggleMark(req, res, next){
    jwtprocessor.verify(req.body.token)
    .then(response=>{
      let email = response.email;
      return Models.User.findOne({email})
    })
    .then(response=>{
      if(response){
        let todo = response.todos.id(mongoose.Types.ObjectId(req.body.id));
        if(!todo){
          throw 'Task not exist'
        }
        todo.status = todo.status=='Done' ? 'Not Done' : 'Done';
        return response.save();
      }else{
        throw 'wrong token'
      }
    })
    .then(response=>{
      res.send({message:'berhasil'})
    })
    .catch(err=>{
      console.log(err);
      res.send({message:'gagal'})
    })
  }
  static deleteTask(req, res, next){
    jwtprocessor.verify(req.body.token)
    .then(response=>{
      let email = response.email;
      return Models.User.findOne({email})
    })
    .then(response=>{
      response.todos.id(req.body.id).remove();
      return response.save()
    })
    .then(response=>{
      res.send({message:'berhasil'})
    })
    .catch(err=>{
      res.send({message:'gagal'})
    })
  }
}

module.exports = Controller;

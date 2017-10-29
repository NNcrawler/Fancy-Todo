const Models = require('../models/all-models');

class Controller{
  static login(req, res, next){

  }
  static register(req, res, next){
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    Models.User.create({username, email, password})
    .then(response=>{
      res.send={message:'berhasil'};
    })
    .catch(err=>{
      res.send={message:'gagal'};
    })
  }
}

module.exports = Controller;

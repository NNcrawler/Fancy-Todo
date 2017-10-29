const Models = require('../models/all-models');
const jwtprocessor = require('../helpers/jwtprocessor');


class Controller{
  static login(req, res, next){
    Models.User.findOne({email:req.body.email})
    .then(response=>{
      if(response){
        if(response.password == req.body.password){
          jwtprocessor.sign({
            email:response.email,
          }, (err, token)=>{
            if(err){
              throw 'Sign failed'
            }else{
              res.send({message:'berhasil', token})
            }
          })

        }else{
          throw 'Password doesn\'t match'
        }
      }else{
        throw 'Account doesn\'t exist'
      }
    })
    .catch(err=>{
      res.send({message:'gagal'})
    })
  }
  static register(req, res, next){
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    Models.User.create({username, email, password})
    .then(response=>{
      res.send({message:'berhasil'});
    })
    .catch(err=>{
      res.send({message:'gagal'});
    })
  }
}

module.exports = Controller;

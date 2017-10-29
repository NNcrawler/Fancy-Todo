var mongoose = require('mongoose');
mongoose.Promise = global.Promise
var Schema = mongoose.Schema;
if (mongoose.connection.readyState === 0) {
  mongoose.connect(require('./connection-string'));
}

var todo = new Schema({
  title : {type:String, required:true},
  detail : {type:String},
  status : {type: String, default: 'Not Done'},
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
})

var newSchema = new Schema({
  username: {type:String, required:true},
  email: {type: String, unique:true, index:true, required:true},
  password: {type:String, required:true},
  todos: [todo],
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});



module.exports = mongoose.model('User', newSchema);

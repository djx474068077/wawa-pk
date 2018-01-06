let mongoose = require('mongoose');
let db = require('../db');
let Schema = mongoose.Schema;
let userSchema = new Schema({
  user_id:Number,
  user_id:String,
  user_avatar:String,

});
let UserModel = db.model('User',userSchema);
module.exports = UserModel;

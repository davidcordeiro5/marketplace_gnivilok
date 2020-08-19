const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  userType: String
});

module.exports = model('User', userSchema);
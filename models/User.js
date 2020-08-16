const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  password: String,
  type: String
});

module.exports = model('User', userSchema);
const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  image: String,
  autor: String,
});

module.exports = model('Post', postSchema);
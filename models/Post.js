const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: String,
  image: String,
  autor: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);
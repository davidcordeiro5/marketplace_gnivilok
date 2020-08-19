const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  title: String,
  imageUrl: String,
  description: String,
  price: String,
  size: String,
  disponibility: Boolean,
  type: String,
  autor: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);
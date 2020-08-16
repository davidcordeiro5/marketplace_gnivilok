const { AuthenticationError } = require('apollo-server');

const Post = require('../../models/Post');

const checkAuth = require('../../utils/check-auth');

module.exports = {

  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPost(_, { postId }) {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },

  Mutation: {
    async createPost(_, { body }, context) {
      const user = checkAuth(context);

      const newPost = new Post({
        body,
        user: user.id,
        autor: user.username
      });

      const post = await newPost.save();

      return post
    },


    async updatePost(_, { postId, body }, context) {
     // const user = checkAuth(context);

     try {
        const actualPost = await Post.findById(postId);
        
        const post = await Post.findByIdAndUpdate(postId, { 
          body: body ? body : actualPost.body
        }) 
        
        return post;
      } catch (err) {
        throw new Error(err);
      }
    },

    async deletePost(_, { postId }, context) {
      const user = checkAuth(context);

      try {
        const post = await Post.findById(postId);

        if (user.username === post.autor) {
          await post.deleteOne();
          return 'post deleted';
        } else {
          throw new AuthenticationError('None autorized')
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}
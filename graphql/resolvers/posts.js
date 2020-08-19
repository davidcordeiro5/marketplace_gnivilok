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
    async createPost(_, agrs, context) {
      const user = checkAuth(context);

      const newPost = new Post({
        title: agrs.title,
        imageUrl: agrs.imageUrl,
        description: agrs.description,
        price: agrs.price,
        size: agrs.size,
        disponibility:agrs.disponibility,
        property: agrs.property,
        user: user.id,
        autor: user.username
      });

      const post = await newPost.save();

      return post
    },


    async updatePost(_, agrs) {
     try {
        const actualPost = await Post.findById(agrs.postId);
        
        const post = await Post.findByIdAndUpdate(agrs.postId, { 
          title: agrs.title ? agrs.title : actualPost.title,
          imageUrl: agrs.imageUrl ? agrs.imageUrl : actualPost.imageUrl,
          description: agrs.description ? agrs.description : actualPost.description,
          price: agrs.price ? agrs.price : actualPost.price,
          size: agrs.size ? agrs.size : actualPost.size,
          disponibility: agrs.disponibility ? agrs.disponibility : actualPost.disponibility,
          property: agrs.property ? agrs.property : actualPost.property,
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
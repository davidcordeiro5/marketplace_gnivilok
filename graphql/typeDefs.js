const gql = require('graphql-tag');

const Post = require('../models/Post');

module.exports = gql`
  type Post {
    id: ID!
    body: String
    image: String
    autor: String
  }
  type Query {
    getPosts: [Post]
  }
`
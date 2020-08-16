const gql = require('graphql-tag');

module.exports = gql`
  type Post {
    id: ID!
    imageUrl: String
    description: String!
    price: String!
    size: String!
    disponibility: Boolean
    type: String
    autor: String
  }
  type User {
    id: ID!
    username: String!
    type: String,
    token: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    type: String!
  }

  type Query {
    getPosts: [Post]
    getPost (postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(imageUrl: String
      description: String!
      price: String!
      size: String!
      disponibility: Boolean
      type: String)
    : Post!
    updatePost(postId: ID!,
      imageUrl: String
      description: String
      price: String
      size: String
      disponibility: Boolean
      type: String):
    Post!
    deletePost(postId: ID!): String!  
  }
`
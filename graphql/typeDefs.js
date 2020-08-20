const gql = require('graphql-tag');

module.exports = gql`
  type Post {
    id: ID!
    title: String!
    imageUrl: String
    description: String!
    price: String!
    size: String!
    disponibility: Boolean
    property: String
    autor: String
  }
  type User {
    id: ID!
    username: String!
    userType: String,
    token: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    userType: String!
  }

  type Query {
    getPosts: [Post]
    getPost (postId: ID!): Post!
    getUser (userId: ID!): User!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(
      title: String!
      imageUrl: String
      description: String!
      price: String!
      size: String!
      disponibility: Boolean
      property: String)
    : Post!
    updatePost(
      postId: ID!,
      title: String
      imageUrl: String
      description: String
      price: String
      size: String
      disponibility: Boolean
      property: String):
    Post!
    deletePost(postId: ID!): String!  
  }
`
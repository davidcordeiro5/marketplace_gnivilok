const gql = require('graphql-tag');

module.exports = gql`
  type Post {
    id: ID!
    body: String
    image: String
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
    type: String
  }

  type Query {
    getPosts: [Post]
    getPost (postId: ID!): Post
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String): Post!
    deletePost(postId: ID!): String!  
  }
`
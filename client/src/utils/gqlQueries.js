import gql from 'graphql-tag';

const LOGIN_USER = gql`
 mutation login(
    $username: String!
    $password: String!
  ) {
    login(
        username: $username,
        password: $password
    ) {
      id
      username
      userType
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $userType: String!
  ) {
    register(
      registerInput: {
        username: $username,
        password: $password,
        confirmPassword: $confirmPassword,
        userType: $userType,
      }
    ) {
      id
      username
      userType
      token
    }
  }
`;

const GET_POSTS = gql`
  {
    getPosts {
      title
      id
      imageUrl
      description
      price
      size
      disponibility
      property
      autor  
    }
  }
`

export {
  LOGIN_USER,
  REGISTER_USER,
  GET_POSTS
}
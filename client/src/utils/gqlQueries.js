import gql from 'graphql-tag';

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

const GET_POST_BY_ID = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
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

const GET_USER = gql`
  query($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      userType
    }
  }
`


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

const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $imageUrl: String!
    $description: String!
    $price: String!
    $size: String!
    $disponibility: Boolean
    $property: String!
  ) {
    createPost(
      title: $title,
      imageUrl: $imageUrl,
      description: $description,
      price: $price,
      size: $size,
      disponibility: $disponibility,
      property: $property,
    ) {
      id
    	title
      imageUrl
      description
      price
      size
      disponibility
      property
      autor
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

const UPDATE_POST = gql`
  mutation updatePost(
    $postId: ID!
    $title: String
    $imageUrl: String
    $description: String
    $price: String
    $size: String
    $disponibility: Boolean
    $property: String
  ) {
    updatePost(
      postId: $postId
      title: $title
      imageUrl: $imageUrl
      description: $description
      price: $price
      size: $size
      disponibility: $disponibility
      property: $property) {
        id
        title
        imageUrl
        description
        price
        size
        disponibility
        property
        autor
      }
    }
`;

export {
  GET_POSTS,
  GET_POST_BY_ID,
  DELETE_POST,
  GET_USER,
  LOGIN_USER,
  REGISTER_USER,
  CREATE_POST,
  UPDATE_POST,
}
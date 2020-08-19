import React from 'react'
import grl from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Post from '../components/Post/Post';

const getPostsQuery = grl`
  {
    getPosts {
      id
      imageUrl
      description
      price
      size
      disponibility
      type
      autor  
    }
  }
`

const HomeContainer = styled.div`
  width: 100%;
  padding: 20px 150px;
`;

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {

  const { loading, data } = useQuery(getPostsQuery)

  return (
    <HomeContainer>
      <h2>Post récent</h2>
      {loading ? (<p>Loading data</p>) : (
        <PostsWrapper>
          {data.getPosts.map((post) => {
            console.log('post', post)
            return (
              <Post postData={post} key={post.id} />
            )
          })}
        </PostsWrapper>
        
      )}
      
    </HomeContainer>
  )
}

export default Home

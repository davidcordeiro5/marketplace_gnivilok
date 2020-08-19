import React from 'react'
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { H2 } from '@bootstrap-styled/v4'
import { PageWrapper } from '../../reusable/resable';

import Post from '../../components/Post/Post';

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

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {

  const { loading, data } = useQuery(GET_POSTS)
  const theme = {
    '$font-size-h2': '2rem',
    '$headings-font-weight': 'bold',
    '$headings-color': '#313131'
  }

  return (
    <PageWrapper>
      <H2 style={{marginBottom: 40}} theme={theme}>Post recent</H2>
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
      
    </PageWrapper>
  )
}

export default Home

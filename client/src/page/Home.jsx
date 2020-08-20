import React from 'react'
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';


import { GET_POSTS } from '../utils/gqlQueries';
import { PageWrapper } from '../reusable/resable';
import TitlePage from '../components/TitlePage';
import Post from '../components/Post';

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {

  const { loading, data } = useQuery(GET_POSTS)

  return (
    <PageWrapper>
      <TitlePage title={"Post recent"}/>
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

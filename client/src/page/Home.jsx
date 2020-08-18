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
  padding: 0 150px;
`;

const Home = () => {

  const { loading, data } = useQuery(getPostsQuery)

  return (
    <HomeContainer>
      {loading ? (<p>Loading data</p>) : (
        <Post postData={data.getPosts[0]} />
      )}
      <h2>Post récent</h2>
      <div className="row">
        <div className="col" style={{ backgroundColor: '#c3c3c3', margin: '0 5px' }}>
          Col 1
        </div>
        <div className="col" style={{ backgroundColor: '#c3c3c3', margin: '0 5px' }}>
          col 2
        </div>
        <div className="col" style={{ backgroundColor: '#c3c3c3', margin: '0 5px' }}>
          col 3
        </div>

        <div className="w-100 d-flex justify-content-between flex-wrap">
          <div className="w-30" style={{ width: '30%' }}> two</div>
          <div className="w-30" style={{ width: '30%' }}> three</div>
          <div className="w-30" style={{ width: '30%' }}> three</div>
        </div>

      </div>
      Home
    </HomeContainer>
  )
}

export default Home

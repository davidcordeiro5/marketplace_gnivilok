import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gra from 'graphql-tag';

import Post from '../components/Post/Post';

const getPostsQuery = gra`
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

const Home = () => {

  const { loading, data } = useQuery(getPostsQuery)


  return (
    <div className="container">
      {loading ? (<p>Loading data</p>) : (
        <Post postData={data.getPosts[0]} title="young" name="padawan" theme={{
          '$font-family-base': 'Helvetica',
          '$btn-primary-color': '#EA638C',
          '$btn-primary-bg': '#190E4F',
          '$btn-border-radius': '.035rem',
        }}/>
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
        <div className="w-30" style={{ width: '30%'}}> two</div>
        <div className="w-30" style={{ width: '30%'}}> three</div>
        <div className="w-30" style={{ width: '30%'}}> three</div>
      </div>

      </div>
      Home
    </div>
  )
}

export default Home

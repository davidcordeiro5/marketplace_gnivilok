import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { H1, H2 } from '@bootstrap-styled/v4'

import { AuthContext } from '../context/auth';
import { GET_POST_BY_ID } from '../utils/gqlQueries';
import { PageWrapper } from '../reusable/resable';

import CarouselImagePost from '../components/CarouselPostImages';


const theme = {
  '$font-size-h2': '2rem',
  '$headings-font-weight': 'bold',
  '$headings-color': '#313131'
}

const SinglePost = (props) => {
  const context = useContext(AuthContext)
  const { loading, data } = useQuery(GET_POST_BY_ID, {
    variables: {
      postId: props.match.params.postId
    }
  })

  console.log('MY DATA', data)
  return (
    <PageWrapper bgc="#F4F4ED">
      {loading ? (<p>Loading data...</p>) : (
        <div>
          <button onClick={() => {props.history.goBack()}}>Go back</button>
          <CarouselImagePost img={data.getPost.imageUrl} />
          <p style={{ color: "#828282" }}>city PostalCode - distance ? </p>
          <H1>{data.getPost.title}</H1>
          <p>Koliving text</p>
          <H2>A propos de l'appartement</H2>
          <p>{data.getPost.description}</p>
        </div>
      )}
    </PageWrapper>
  )
}

export default SinglePost

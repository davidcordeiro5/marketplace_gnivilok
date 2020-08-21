import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';

import { AuthContext } from '../context/auth';
import { GET_POST_BY_ID } from '../utils/gqlQueries';
import { PageWrapper} from '../reusable/resable';

const SinglePost = (props) => {
  const context = useContext(AuthContext)
  const {loading, data} = useQuery(GET_POST_BY_ID, {
    variables: {
      postId: props.match.params.postId
    }
  })



  console.log('MY DATA', data)
  return (
    <PageWrapper bgc="#F4F4ED">
      {loading ? (<p>Loading data...</p>) : (
        <p>{data.getPost.autor}</p>    
      )}
    </PageWrapper>
  )
}

export default SinglePost

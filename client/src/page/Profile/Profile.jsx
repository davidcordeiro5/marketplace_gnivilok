import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { H3 } from '@bootstrap-styled/v4';

import { GET_POSTS, GET_USER } from '../../utils/gqlQueries';
import { AuthContext } from '../../context/auth';
import { PageWrapper } from '../../reusable/resable';
import TitlePage from '../../components/TitlePage/TitlePage'
import CreatePostModal from '../../components/CreatePostModal/CreatePostModal';
import Post from '../../components/Post/Post';
import { validate } from 'graphql';

const Profile = (props) => {
  const context = useContext(AuthContext)

  const { loading, data } = useQuery(GET_POSTS)
  const user = useQuery(GET_USER, {
    variables: {
      userId: context.user.id
    }
  })

  console.log('use:::::r', user)

  const theme = {
    '$headings-font-weight': 'bold',
    '$headings-color': '#313131'
  }


  if (user.data) {
    console.log('object', user.data.getUser)
  } else {
    console.log('NOOOO')
  }
  //{user.loading ? (<p>Indentification...</p>) : ({ user.data.getUser.userType === 'landlord' ? null : null })}

  /**
   *  <div style={{display: "flex", justifyContent: "flex-end"}}>
        <CreatePostModal/>
      </div>
   */
  return (
    <PageWrapper>
      <TitlePage title={`Hi, ${context.user.username} !`} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {user.loading ?
          (<p>Indentification...</p>) :
          (<>
            {user.data.getUser.userType === 'landlord' ? <CreatePostModal /> : null}
          </>)}
      </div>
      {loading ? (<p>Loading data...</p>) : (
        <div>
          <H3 theme={{ theme }}>Mes post</H3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.getPosts.map((post) => {
              if (post.autor === context.user.username) {
                return <Post postData={post} key={post.id} />
              }
            })}
          </div>
        </div>
      )}
      <div>
        <H3 theme={{ theme }}>Ils me demandes</H3>
        
      </div>
    </PageWrapper>
  )
}

export default Profile

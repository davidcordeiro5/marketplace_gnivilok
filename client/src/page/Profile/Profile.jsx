import React, { useState, useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';

import { GET_POSTS } from '../../utils/gqlQueries';
import { AuthContext } from '../../context/auth';
import { PageWrapper } from '../../reusable/resable';
import TitlePage from '../../components/TitlePage/TitlePage'
import CreatePostModal from '../../components/CreatePostModal/CreatePostModal';


const Profile = () => {
  //const { loading, data } = useQuery(GET_POSTS)
  const context = useContext(AuthContext)

  console.log('context', context)
  return (
    <PageWrapper>
      <TitlePage title={`Hi, ${context.user.username} !`} />
      
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <CreatePostModal/>
      </div>
      <div>
        Ils me demandes
      </div>
    </PageWrapper>
  )
}

export default Profile

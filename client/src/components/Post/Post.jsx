import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  width: '30%';
`;


const Post = ({ postData }) => {
  console.log('postData', postData)
  return (
    <PostContainer>
      <h3>test</h3>
    </PostContainer>
  )
}

export default Post

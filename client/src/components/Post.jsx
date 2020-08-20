import React from 'react';
import styled from 'styled-components'
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
} from '@bootstrap-styled/v4';

import DefaultImg from '../assets/images/image-not-found.png'

const MyImg = styled.img`
  width: 100%;
  height: 200px;
`;

const theme = {
  'card-bg': '#313131',
  '$card-border-width': '1px',
  '$card-border-color': '#e6e6e6',
  '$card-spacer-x': '10px',
}

const Post = ({ postData }) => {
  console.log('postData', postData)
  return (
    <Card onClick={() => console.log('click', postData.id)} theme={theme} style={{ margin: '15px', width: '30%', cursor: 'pointer'}} >
      <MyImg src={postData.imageUrl ? postData.imageUrl : DefaultImg} alt={postData.title} />
      <CardBlock>
        <CardTitle>{postData.title}</CardTitle>
        <CardSubtitle style={{margin: '5px 0'}}>{`${postData.price}`}</CardSubtitle>
        <CardSubtitle>{`${postData.size} m²`}</CardSubtitle>
        <CardText>{postData.description}</CardText>
      </CardBlock>
      <CardFooter style={{ padding: '10px 20px', fontStyle: 'italic', fontSize: '0.8rem' }}>
        {`Posted by :   ${postData.autor}`}
      </CardFooter>
    </Card>
  )
}
export default Post
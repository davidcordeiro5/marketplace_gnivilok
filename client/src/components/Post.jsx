import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
} from '@bootstrap-styled/v4';

import UpdatePost from '../components/UpdatePost'
import DeletePost from '../components/DeletePost'
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

const IconButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;


const Post = (props) => {
  const history = useHistory();

  return (
    <Card 
      theme={theme} style={{ margin: '15px', width: '30%'}} >
      <MyImg src={props.postData.imageUrl ? props.postData.imageUrl : DefaultImg} alt={props.postData.title} />
      <CardBlock onClick={() => history.push(`/post/${props.postData.id}`)} 
        style={{cursor: 'pointer', overflow: 'hidden',
        maxHeight: '280px'
    }}>
        <CardTitle>{props.postData.title}</CardTitle>
        <CardSubtitle style={{ margin: '5px 0' }}>{`${props.postData.price}`}</CardSubtitle>
        <CardSubtitle>{`${props.postData.size} m²`}</CardSubtitle>
        <CardText>{props.postData.description}</CardText>
      </CardBlock>
      <CardFooter style={{
        padding: '10px 20px', fontStyle: 'italic', fontSize: '0.8rem', display: 'flex',
        position: 'relative', alignItems: 'center'
      }}>
        {`Posted by :   ${props.postData.autor}`}
        {props.deleteable ?
          <IconButtonWrapper>
            <UpdatePost post={props.postData} />
            <DeletePost id={props.postData.id} refeching={props.refetching()}/>
          </IconButtonWrapper> : null}
      </CardFooter>
    </Card >
  )
}
export default Post
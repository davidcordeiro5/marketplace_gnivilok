import React from 'react';
import styled from 'styled-components'
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from '@bootstrap-styled/v4';


const MyImg = styled.img`
  width: 100%;
  height: 200px;
`;

//TODO: In server add title et createAt or fake date

const theme = {
  'card-bg': '#313131',
  '$card-border-width': '1px',
  '$card-border-color': '#e6e6e6',
  '$card-spacer-x': '10px',
}

const Post = ({ postData }) => {
  console.log('postData', postData)
  return (
    <Card theme={theme} width="30%" style={{ margin: '15px'}} >
      <MyImg src="https://zupimages.net/up/20/33/vvju.jpg" alt="Card image cap" />
      <CardBlock>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the Card content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </CardBlock>
    </Card>
  )
}
export default Post
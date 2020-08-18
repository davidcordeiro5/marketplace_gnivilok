import React from 'react';
import styled from 'styled-components'
import { Card } from '@bootstrap-styled/v4';

const FelxWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  width: 33%;
  ${(props) => `
      background-color: ${props.theme['$btn-primary-bg']};
      color: ${props.theme['$btn-primary-color']};

  `};
`;

const Post = ({ title, name, theme }) => {
  return (
    <FelxWrapper >
      <Button theme={theme}> HHHHOOOOOLLLLAAAA </Button>
    </FelxWrapper>
  )
  //console.log('postData', postData)
  // return (
  //   <Card>
  //   <CardBlock>
  //     <H3 className="d-inline">
  //       Hello <Small>{title}</Small> <Strong>{name}</Strong>, <A>you</A>, can add <Code>1</Code> to
  //     </H3>
  //     {' '}
  //     <Badge color="danger" pill>
  //       <H3>$</H3>
  //     </Badge>{' '}
  //     <Strong>by</Strong> pressing,
  //     <Button onClick={() => console.log("click")}>here</Button>. This
  //     <Code><Strong>module</Strong></Code> is a basic example with a custom Bootstrap Styled theme.

  //       <Alert color="success"className="mt-2" uncontrolled>

  //         <Code><Strong>VIEW CODE</Strong></Code> button to learn how it work
  //       </Alert>

  //       <Alert color="warning"className="mt-2">Do you know the <Code><Strong>Code snippet</Strong></Code> can be edited in live?</Alert>
  //   </CardBlock>
  // </Card>
  // )
}
export default Post
import React from 'react';
import { useForm } from 'react-hook-form';
import { H2 } from '@bootstrap-styled/v4'
import { 
  PageWrapper,
  FromWrapper,
  From, 
  FromGroup, 
  InputSubmit,
  InputText,
  Label } from '../../reusable/resable'


const Login = () => {
  const theme = {
    '$font-size-h2': '2rem',
    '$headings-font-weight': 'bold',
    '$headings-color': '#313131'
  }
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <PageWrapper>
      <H2 style={{ marginBottom: 40 }} theme={theme}>Login</H2>
      <FromWrapper>
        <From onSubmit={handleSubmit(onSubmit)}>
          <FromGroup>
            <Label for="name">Name :</Label>
            <InputText id="name" name="name" ref={register} />
          </FromGroup>
          <FromGroup>
            <Label for="password">Password :</Label>
            <InputText id="password" name="password" type="password" ref={register} />
          </FromGroup>
          <InputSubmit type="submit" value="Connection" />
        </From>
      </FromWrapper>

    </PageWrapper>
  )
}

export default Login

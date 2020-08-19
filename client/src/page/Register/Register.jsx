import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form';
import { H2 } from '@bootstrap-styled/v4'
import {
  PageWrapper,
  FromWrapper,
  From,
  FromGroup,
  InputRadio,
  InputSubmit,
  InputText,
  Label
} from '../../reusable/resable'


const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $userType: String!
  ) {
    register(
      registerInput: {
        username: $username,
        password: $password,
        confirmPassword: $confirmPassword,
        userType: $userType,
      }
    ) {
      id
      username
      userType
      token
    }
  }
`;

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    userType: ''
  })

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log('result', result, values)
    },
    variables: values
  })

  const { handleSubmit, register, errors } = useForm();
  
  
  const onChange = (event) => {
    console.log('event.target.name', event.target.name, event.target.value)
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  
  const onSubmit = (event) => {
    addUser();
    console.log('event', event, values)
  };

  const theme = {
    '$font-size-h2': '2rem',
    '$headings-font-weight': 'bold',
    '$headings-color': '#313131'
  }
  return (
    <PageWrapper>
      <H2 style={{ marginBottom: 40 }} theme={theme}>Register</H2>
      <FromWrapper>
        <From onSubmit={handleSubmit(onSubmit)}>
          <FromGroup>
            <Label forHtml="username">Username :</Label>
            <InputText id="username" name="username" onChange={onChange} ref={register({ required: true })} />
            {errors.username && <span>This field is required</span>}
          </FromGroup>
          <FromGroup>
            <Label forHtml="password">Password :</Label>
            <InputText id="password" name="password" type="password" onChange={onChange} ref={register({ required: true })}/>
            {errors.password && <span>This field is required</span>}
          </FromGroup>
          <FromGroup>
            <Label forHtml="confirmPassword">Confirm your password :  </Label>
            <InputText id="confirmPassword" name="confirmPassword" type="password" onChange={onChange} ref={register({ required: true })}/>
            {errors.confirmPassword && <span>This field is required</span>}
          </FromGroup>
          <FromGroup flexDirection='row'>
            <Label forHtml="landlord">Landlord :
              <InputRadio id="landlord" name="userType" type="radio" value="landlord" onChange={onChange}  ref={register({ required: true})}/>
            </Label>
            <Label forHtml="tenant">Tenant :
              <InputRadio id="tenant" name="userType" type="radio" value="tenant" onChange={onChange} ref={register({ required: true})}/>
            </Label>
            {errors.userType && <span>This field is required</span>}
          </FromGroup>

          <InputSubmit type="submit" value="Validate" />
        </From>
      </FromWrapper>
    </PageWrapper>
  )
}

export default Register

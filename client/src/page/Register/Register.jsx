import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form';
import { H2 } from '@bootstrap-styled/v4'

import { REGISTER_USER } from '../../utils/gqlQueries';
import { AuthContext } from '../../context/auth';
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

const Register = (props) => {
  const context = useContext(AuthContext)
  const { handleSubmit, register, errors } = useForm();
  const [graphqlErrors, setGraphqlErrors] = useState({})
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    userType: ''
  })

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      context.login(result.data.register)
      props.history.push('/')
    },
    onError(err) {

      console.log(err.graphQLErrors[0].extensions.errors)
      setGraphqlErrors(err.graphQLErrors[0].extensions.errors)
    },
    variables: values
  })
  
  
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
        { (!loading) ? 
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
        {Object.keys(graphqlErrors).length > 0 ? <p>graphqlErrors: try an other name</p> : null}
        </From> : (<p>loading...</p>)}
      </FromWrapper>
    </PageWrapper>
  )
}

export default Register

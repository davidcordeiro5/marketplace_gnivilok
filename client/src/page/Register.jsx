import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form';

import TitlePage from '../components/TitlePage';
import { REGISTER_USER } from '../utils/gqlQueries';
import { AuthContext } from '../context/auth';
import {
  PageWrapper,
  FromWrapper,
  From,
  FromGroup,
  InputRadio,
  InputSubmit,
  InputText,
  Label
} from '../reusable/resable'

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
    setValues({ ...values, [event.target.name]: event.target.value })
  }
  
  const onSubmit = (event) => {
    addUser();
  };

  return (
    <PageWrapper>
      <TitlePage title="Register"/>
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
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <InputSubmit type="submit" value="Connection" />
          </div>
        {Object.keys(graphqlErrors).length > 0 ? <p>graphqlErrors: try an other name</p> : null}
        </From> : (<p>loading...</p>)}
      </FromWrapper>
    </PageWrapper>
  )
}

export default Register

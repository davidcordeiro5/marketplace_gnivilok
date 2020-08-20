import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

import { LOGIN_USER } from '../../utils/gqlQueries'
import { AuthContext } from '../../context/auth';
import TitlePage from '../../components/TitlePage/TitlePage';
import {
  PageWrapper,
  FromWrapper,
  From,
  FromGroup,
  InputSubmit,
  InputText,
  Label
} from '../../reusable/resable'

const Login = (props) => {
  const context = useContext(AuthContext)
  console.log('context', context)
  const { handleSubmit, register, errors } = useForm();
  const [graphqlErrorsLogin, setGraphqlErrorsLogin] = useState({})
  const [loginInput, setLoginInput] = useState({
    username: '',
    password: ''
  })

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      context.login(result.data.login)
      props.history.push('/')
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.errors)
      setGraphqlErrorsLogin(err.graphQLErrors[0].extensions.errors)
    },
    variables: loginInput
  })
  
  const onChange = (event) => {
    setLoginInput({ ...loginInput, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    loginUser();
    console.log('event', event, loginInput)
  };
  return (
    <PageWrapper>
      <TitlePage title="Login"/>
      <FromWrapper>
        {(!loading) ? 
        <From onSubmit={handleSubmit(onSubmit)}>
          <FromGroup>
            <Label htmlFor="username">Name :</Label>
            <InputText id="username" name="username" onChange={onChange} ref={register({ required: true })} />
            {errors.username && <span>This field is required</span>}
          </FromGroup>
          <FromGroup>
            <Label htmlFor="password">Password :</Label>
            <InputText id="password" name="password" type="password" onChange={onChange} ref={register({ required: true })}/>
            {errors.password && <span>This field is required</span>}
          </FromGroup>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <InputSubmit type="submit" value="Connection" />
          </div>
          {Object.keys(graphqlErrorsLogin).length > 0 ? <p>graphqlErrorsLogin: Bad name or password</p> : null}
        </From>: (<p>loading...</p>)}
      </FromWrapper>
    </PageWrapper>
  )
}

export default Login

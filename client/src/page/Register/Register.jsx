import React, { useState } from 'react';
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
  Label } from '../../reusable/resable'

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    password: '',
    confirmPassword: '',
    userType: ''
  })

  const { handleSubmit, register, errors } = useForm();
  const onSubmit = data => console.log(data);
  
  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

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
            <Label for="name">Name :</Label>
            <InputText id="name" name="name" ref={register} />
          </FromGroup>
          <FromGroup>
            <Label for="password">Password :</Label>
            <InputText id="password" name="password" type="password" ref={register} />
          </FromGroup>
          <FromGroup>
            <Label for="confirmPassword">Confirm your password :  </Label>
            <InputText id="confirmPassword" name="confirmPassword" type="password" ref={register} />
          </FromGroup>
          <FromGroup flexDirection='row'>
            <Label for="landlord">Landlord :
              <InputRadio id="landlord" name="userType" type="radio" value="landlord" ref={register} />
            </Label>
            <Label for="tenant">Tenant :
              <InputRadio id="tenant" name="userType" type="radio" value="tenant" ref={register} />
            </Label>
          </FromGroup>

          <InputSubmit type="submit" value="Validate" />
        </From>
      </FromWrapper>
    </PageWrapper>
  )
}

export default Register

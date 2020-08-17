import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationBar.css'
import styled from 'styled-components'

const NavTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

const NavigationBar = () => {

  return (
    <nav class="navbar navbar-expand-lg Gnivilok bg-dark">
      <NavTitle className="text-warning"> Gnivilok </NavTitle>
      <div className="w-100 d-flex flex-row justify-content-between px-5">
        <div>
          <NavLink  exact activeClassName="link-active" to="/" style={{ padding: 5 }}>Home</NavLink>
          <NavLink activeClassName="link-active" to="/profile" style={{ padding: 5 }}>Profile</NavLink>
        </div>
        <div>
          <NavLink activeClassName="link-active" to="/login" style={{ padding: 5 }}>Login</NavLink>
          <NavLink activeClassName="link-active" to="/register" style={{ padding: 5 }}>Registre</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar

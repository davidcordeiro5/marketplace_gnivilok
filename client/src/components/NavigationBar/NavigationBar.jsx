import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { AuthContext } from '../../context/auth';
import './NavigationBar.scss'

const MyNavbar = styled.nav`
  display: flex;
  width: 100%;
  background-color: #313131 !important;
  padding: 0 10px;
`;

const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

const NavTitle = styled.h1`
  color: #FFBF00;
`;

const NavigationBar = () => {
  const context = useContext(AuthContext)


  return (
    <MyNavbar className="navbar">
      <NavTitle>Gnivilok</NavTitle>
      {
        context.user ? (
          <NavLinkWrapper>
            <div>
              <NavLink exact activeClassName="link-active" to="/" style={{ padding: 5 }}>Home</NavLink>
              <NavLink activeClassName="link-active" to="/profile" style={{ padding: 5 }}>Profile</NavLink>
            </div>
            <div>
              <a href=" " onClick={context.logout} style={{ padding: 5 }}>Logout</a>
            </div>
          </NavLinkWrapper >
        ) : (
            <NavLinkWrapper>
              <div>
                <NavLink exact activeClassName="link-active" to="/" style={{ padding: 5 }}>Home</NavLink>
              </div>
              <div>
                <NavLink activeClassName="link-active" to="/login" style={{ padding: 5 }}>Login</NavLink>
                <NavLink activeClassName="link-active" to="/register" style={{ padding: 5 }}>Registre</NavLink>
              </div>
            </NavLinkWrapper >
          )
      }
    </MyNavbar >
  )
}

export default NavigationBar

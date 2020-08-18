import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationBar.scss'

const NavigationBar = () => {

  return (
    <nav className="navbar navbar-expand-lg Gnivilok bg-dark">
      <h1>Gnivilok</h1>
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
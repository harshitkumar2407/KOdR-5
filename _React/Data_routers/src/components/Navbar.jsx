import React from 'react'
import { NavLink } from 'react-router'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user,logout } = useAuth();
  return (
    <div className='navbar'>
        <h1>LOGO</h1>
        <div className='navbar-nav'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/jhggkh"}>NotFound</NavLink>

        </div>
        <div>
          {user ? (
            <button className="btn btn-outline" onClick={() => {logout()}}>Logout</button>
          ) : (
            <NavLink to={"/auth/login"}>
            <button className="btn btn-outline ">Login</button>
            </NavLink>
          )}
        </div>
    </div>
  )
}

export default Navbar
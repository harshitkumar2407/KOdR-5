import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <div className='navbar-nav'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
            <NavLink to={"/jhggkh"}>NotFound</NavLink>

        </div>
        <div>
            <NavLink to={"/auth/login"}>
            <button className="btn btn-outline ">Login</button>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar
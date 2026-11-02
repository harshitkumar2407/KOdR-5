import React from 'react'
import {NavLink} from 'react-router-dom'

const CustomNavLink = ({children ,to}) => {
  return (
    <NavLink
        to={to} 
        className={({ isActive }) => (isActive ? "active":"inactive")}
    >{children}</NavLink>
  )
}

export default CustomNavLink
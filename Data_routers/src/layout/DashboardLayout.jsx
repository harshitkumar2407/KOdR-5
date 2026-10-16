import React from 'react'
import { NavLink, Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div> 
        <div className="navbar">
          <div>Dashboard____</div>
          <div className="navbar-nav">
            <NavLink to={"/dashboard/analytics"}>Analytics</NavLink>
            <NavLink to={"/dashboard/settings"}>Settings</NavLink>
            <NavLink to={"/dashboard/projects"}>Projects</NavLink>
          </div>
          <div>
              <NavLink to={"/"}>
              <button className='btn btn-outline'> Home</button>
              </NavLink>
            
          </div>
          </div> 
          <Outlet/>
    </div>
  )
}

export default DashboardLayout

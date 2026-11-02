import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <div className="footer">footer</div>
    </div>
  )
}

export default RootLayout
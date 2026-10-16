import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div>
        <p className='text-center'> Become a part of over community</p>
            <Outlet/>
    </div>
  )
}

export default AuthLayout
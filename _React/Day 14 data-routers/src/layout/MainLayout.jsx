import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    console.log('Main Layout');
    
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
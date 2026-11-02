import React from 'react'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        <h1>Dashboard</h1>
        <div><Outlet/></div>
    </div>
  )
}

export default Dashboard
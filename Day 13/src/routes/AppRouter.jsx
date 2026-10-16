import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicProtected from '../components/PublicProtected'

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        }/>
        <Route path='/about' element={
            <ProtectedRoute>
                <About/>
            </ProtectedRoute>
        }/>


        <Route path='/login' element={
          <PublicProtected>
            <Login/> 
          </PublicProtected>}
          />
        <Route path='/register' element={
          <PublicProtected>
            <Register/>
          </PublicProtected>
        } />

    </Routes>
    </>
  )
}

export default AppRouter
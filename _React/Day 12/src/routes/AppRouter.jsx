
import { Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About';
import Projects from "../Pages/Projects";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path="/*" element={<NotFound/>} />

        </Routes>
    </div>
  )
}

export default AppRouter
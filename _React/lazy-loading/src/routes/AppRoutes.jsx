import React, { lazy } from 'react'
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './Layout'
import Home from '../pages/Home'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
let About = lazy(() => import("../pages/About"));
let Contact = lazy(() => import("../pages/Contact"))


const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"about",
                    element:<About/>
                },
                {
                    path:"contact",
                    element:<Contact/>
                }
            ]
        }
    ])






    return <RouterProvider router={router}/>
}

export default AppRoutes

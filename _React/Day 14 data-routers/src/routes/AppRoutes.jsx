import React from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About.jsx'
import MainLayout from '../layout/MainLayout'

const AppRoutes = () => {
        let router = createBrowserRouter([
            {
                path: "/",
                element: <MainLayout/> ,
                children: [
                    {
                        index: true,
                        element:<Home/>
                    },
                    {
                        path:"/about",
                        element:<About/>
                    },
                    {
                        path:"/products",
                        element:<Products/>
                    }
                ]
            }
        ])  
        return <RouterProvider router={router} />
}

export default AppRoutes
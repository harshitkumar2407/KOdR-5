import React from "react";
import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Projects from "../pages/projects/Projects";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import Analytics from "../pages/dashboard/Analytics";
import Settings from "../pages/dashboard/Settings";
import EditProfile from "../pages/profile/EditProfile";
import ProjectTasks from "../pages/projects/ProjectTasks";
import ProjectsDetails from "../pages/projects/ProjectsDetails";
import ProjectMembers from "../pages/projects/ProjectMembers";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
  import { ToastContainer, toast } from 'react-toastify';

const AppRouter = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    index:true,
                    element: <Home />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],    
        },
        {
            path:"/auth",
            element:<AuthLayout/>,
            children:[
                // {
                //     index:true,
                //     element:<Login/>
                // },
                {
                    path:"login",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ]
        },
        {
            path:"/dashboard",
            element: <DashboardLayout/>,
            children:[
                {
                    index:true,
                    element:<Dashboard/>
                },
                {
                    path:"analytics",
                    element: <Analytics/>
                },
                {
                    path:"settings",
                    element:<Settings/>
                },
                {
                    path:"projects",
                    element:<Projects/>,
                    children:[
                        {
                            path:":id/task",
                            element:<ProjectTasks/>
                        },
                        {
                            path:":id/details",
                            element: <ProjectsDetails/>
                        },
                        {
                            path:":id/members",
                            element:<ProjectMembers/>
                        }
                    ]
                }
            ]
        },
        {
            path:"/profile",
            element:<Profile/>,
            children:[{
                path:"edit",
                element:<EditProfile/>
            }]
        }

    ]);

    return <>
    <RouterProvider router={router} />
    <ToastContainer/>

    </>
};

export default AppRouter;

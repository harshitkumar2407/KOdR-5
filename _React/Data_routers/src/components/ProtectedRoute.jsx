import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    console.log("Protected Route");
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return <Outlet/>;
}

export default ProtectedRoute
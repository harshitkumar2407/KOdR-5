

import React, { createContext, useContext, useState, useEffect } from 'react';
 
 const AuthContext = createContext();
 
 export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);
   const [registerUsers, setRegisterUsers] = useState(
    localStorage.getItem('registerUsers') ? JSON.parse(localStorage.getItem('registerUsers')) : []
   );
 
 
   const login = (userData) => {
     setUser(userData);
     localStorage.setItem('user', JSON.stringify(userData));
   };
 
   const logout = () => {
     setUser(null);
     localStorage.removeItem('user');
   };
 
   return (
        <AuthContext.Provider value={{ 
            user,
            login, 
            logout,
            registerUsers,
            setRegisterUsers,
            }}>
        {children}
        </AuthContext.Provider>
   );
 };
 
 export const useAuth = () => useContext(AuthContext);

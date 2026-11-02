import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState(
    localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : []);

  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    let checkUser = userList.find((user) => user.email === userData.email && user.password === userData.password);
    if (checkUser) {
      setUser(checkUser);
      return { success: true };
    } else {
      console.log('Invalid email or password.');
      return { success: false, message: 'Invalid email or password.' };
    }
  };

  const registerUser = (userData) => {
    if (!userList.some((user) => user.email === userData.email)) {
      setUserList((prevList) => [...prevList, userData]);
      localStorage.setItem('userList', JSON.stringify([...userList, userData]));
    } else {
      console.log('User with this email already exists.');
      return { success: false, message: 'User with this email already exists.' };
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);



  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, userList, loading, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

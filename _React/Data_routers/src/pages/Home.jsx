import React from 'react'
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { user } = useAuth();

  return (
    <div className='container'>
        <div className="user-welcome">
            <h1>Welcome {user?.name || 'User'}</h1>
        </div>
    </div>
  )
}

export default Home
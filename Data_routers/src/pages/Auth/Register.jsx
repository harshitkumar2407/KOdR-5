import React from 'react'
import { Link } from 'react-router'
const Register = () => {


  return (
    <div className="login-container">
        <div className="login-card">
            <div className="login-title">Register</div>
            
            <form action="">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                      <input 
                            type="text" 
                            name="name" 
                            id="name " 
                            className="form-input"
                            placeholder='Enter your name'
                            />
                    </div>

                    <div className="form-group">
                    <label  htmlFor="email" className='form-label'>E-mail</label>
                    <input  type="text" 
                            name="email"  
                            id="email" 
                            className='form-input'
                            placeholder='Enter your email' />
                    </div>

                    <div className="form-group">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        className='form-input'
                        placeholder='Enter your password' />
                    </div>

                        <button className='btn btn-outline w-full'>Register</button>
                </form>
                {/* use link to navigate */}
                <p className='text-center mt-4'>Already have an account? <Link to="/auth/login" className='text-blue-500'>Login</Link></p>



        </div>
    </div>
  )
}

export default Register
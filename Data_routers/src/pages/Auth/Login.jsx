import React from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
const Login = () => {
  return (
    <div class="login-container">
    <div class="login-card">
        <div className="btn btn-primary"
            onClick={()=> toast("WE WON Buddy")}
            >Login</div>

        <h2 class="login-title">Login</h2>

        <form>
            <div class="form-group">
                <label class="form-label" for="email">
                    Email
                </label>
                <input
                    class="form-input"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                />
            </div>

            <div class="form-group">
                <label class="form-label" for="password">
                    Password
                </label>
                <input
                    class="form-input"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                />
            </div>

            <button 
                type="submit"
                className='btn btn-outline w-full'
                >Login</button>
        </form>
        {/* use link insted */}
        <p className='text-center mt-4'>Don't have an account? <Link to="/auth/register" className='text-blue-500'>Register</Link></p>

    </div>
</div>
  )
}

export default Login
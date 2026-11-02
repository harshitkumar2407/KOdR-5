import React from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import { useForm } from "react-hook-form";
import { useAuth } from '../../context/AuthContext';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {
            register,
            handleSubmit,
            formState: { errors }}   = useForm()
    const {login} = useAuth()


    const onSubmit =(data) =>{
        login(data)
        console.log("Loged in ",data)
        toast.success("Login successful!")
        navigate("/home")
    }
  return (
    <div className="login-container">
    <div className="login-card">
        {/* <div className="btn btn-primary">Login</div> */}

        <h2 className="login-title">Login</h2>

        <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            >
            <div className="form-group">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    className="form-input"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p className='form-input-error'>{errors.email.message}</p>}
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="password">
                    Password
                </label>
                <input
                    className="form-input"
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && <p className='form-input-error'>{errors.password.message}</p>}
            </div>

            <button
                type="submit"
                className='btn btn-outline w-full'
                >Login</button>
        </form>

        <p className='text-center mt-4'>Don't have an account? <Link to="/auth/register" className='text-blue-500'>Register</Link></p>

    </div>
</div>
  )
}

export default Login

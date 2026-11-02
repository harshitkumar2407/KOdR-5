import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Register = () => {
  const navigate = useNavigate()

  const {
		register,
		handleSubmit,
		formState: { errors }} = useForm()
  const {login,registerUser} = useAuth()

  const onSubmit = (data)  =>{
    const result = registerUser(data)
    if (result.success) {
      console.log(data);
      navigate("/home")
    }
    toast.error(result.message || "Registration failed. Please try again.");
  }

  return (
    <div className="login-container">
        <div className="login-card">
            <div className="login-title">Register</div>

            <form action=""
              onSubmit={handleSubmit(onSubmit)}
              >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                      <input
                            type="text"
                            name="name"
                            id="name "
                            className="form-input"
                            placeholder='Enter your name'
                            {...register("name",{required:"Name is required"})}
                            />
							{errors.name && <p className='form-input-error'>{errors.email.message}</p>}
                    </div>

                    <div className="form-group">
                    <label  htmlFor="email" className='form-label'>E-mail</label>
                    <input  type="text"
                            name="email"
                            id="email"
                            className='form-input'
                            placeholder='Enter your email'
                            {...register("email",{required:"Email is required"})}
							/>
							{errors.email && <p className='form-input-error'>{errors.email.message}</p> }
                    </div>

                    <div className="form-group">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className='form-input'
                        placeholder='Enter your password'
                        {...register("password",{required:"Password is Required"})}
						/>
						{errors.password && <p className='form-input-error'>{errors.password.message}</p> }

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

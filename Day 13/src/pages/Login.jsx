import React, { useContext } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useForm } from "react-hook-form";
import { Navigate } from 'react-router';

const Login = () => {
  	const {user,login} =useAuth()

  	const {	register,
    		handleSubmit } =useForm()


  console.log("Log in Page user ->",user );

  const onSubmit = (data) =>{
	// Check if the user exists in the registered users list
	const existingUser = JSON.parse(localStorage.getItem("registerUsers"))?.find(
	  (u) => u.email === data.email && u.password === data.password
	);
	if (!existingUser) {
	  alert("User does not exist. Please register.");
	  return;
	}
    login(data)
    
  }
  
  return (
    <div>Do you want to login as Harshit <br />


        <form action=""
          onSubmit={handleSubmit(onSubmit)}
          >
          <input 
          type="email" 
          name="Email" 
          placeholder='Email'
          {...register("email")}
          />
			      {/* {errors.email && <p>{errors.email.message}</p>} */}
          <input 
          type="password" 
          name="password" 
          {...register("password")}
          placeholder='Password' />
			   {/* {errors.password && <p>{errors.password.message}</p>} */}
            <button type='submit'>Login</button>
        </form>
			<p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  )
}

export default Login
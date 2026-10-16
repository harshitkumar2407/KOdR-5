import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const { user, login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Check if the user already exists
    const existingUser = JSON.parse(localStorage.getItem("registerUsers"))?.find(
      (u) => u.email === data.email
    );

    if (existingUser) {
      alert("User already exists. Please login.");
      return;
    }

    // Save the new user to localStorage
    const updatedUsers = [
      ...(JSON.parse(localStorage.getItem("registerUsers")) || []),
      data,
    ];
    localStorage.setItem("registerUsers", JSON.stringify(updatedUsers));

    // Log in the new user
    login(data);

  };
  return (
    <div>
      <form 
      action="" 
      onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          name="name" 
          id="name" 
          placeholder="Name"
          {...register("name")}
        />
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Email"
          {...register("email")}
        />
        <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;

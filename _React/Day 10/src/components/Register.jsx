import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {  UserInfo } from "../context/MyContext";

const Register = () => {
    const {register,reset, handleSubmit} = useForm()
    const {user,setUser} = useContext(UserInfo);

    function onSubmit(data) {
        // console.log(data);
        setUser(data)
        console.log(user);
        
        reset()   
    }
    
  return (
    <div>
        <form action=""
            className="text-blue-100 gap-3 flex flex-col "
            onSubmit={handleSubmit(onSubmit)}
        >
            <input 
                {...register("name")}
                className="bg-blue-900 rounded px-2"
                type="text" 
                name="name" 
                id="name" 
                placeholder="Name" />
            <input 
                {...register("email")}
                className="bg-blue-900 rounded px-2"
                type="email" 
                name="email" 
                id="email" 
                placeholder="email" />
            <input 
                {...register("password")}
                className="bg-blue-900 rounded px-2"
                type="password" 
                name="password" 
                id="password" 
                placeholder="password" />
            <button
                className="bg-blue-900 rounded px-2"
                >Submint</button>
      </form>
    </div>
  );
};

export default Register;
import React from 'react'
import {useForm} from 'react-hook-form'
const Login = () => {
    const {register,handleSubmit,watch} = useForm()
    const email = watch("email")
    const name = watch("name")

    const onSubmit = (data) => {
    console.log(data);
    
};
  return (
    <div >
        <form 
        className='flex flex-col gap-2 '
        onSubmit={handleSubmit(onSubmit)}
        action="">
        
            {/* <label htmlFor="name">Name</label> */}
            <div>
            <input 
                // {...register("name")}
                {...register("name", {
                    required: "Name is required"})}
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder='Name...'
                    className='bg-green-600 w-55 rounded'
                    />
                <p className='text-blue-100 text-xs'>You're typing: {name}</p>
            </div>


            {/* <label htmlFor="email">E-mail</label> */}
            <div>

            <input 
                // {...register("email")}
                
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                    },
                })}

                type="email" 
                name="email" 
                id="email" 
                placeholder='E-mail...' 
                className='bg-green-600 w-55 rounded'
                />
                <p className='text-blue-100 text-xs'>You're typing: {email}</p>
            </div>

            <button
                className='bg-green-600 w-55 rounded'

                >Submit</button>
        </form>
    </div>
  )
}

export default Login
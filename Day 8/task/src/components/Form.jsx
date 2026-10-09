import React,{useState} from 'react'
import { nanoid } from "nanoid";

const Form = ({setUserData,setToggle}) => {
    const [FormData, setFormData] = useState({
        name:"" ,email:"", password:"",imageURL:"",id:""
    })
    

    // console.log(FormData)
    // console.log(userData)

    function handleChange(e) {
        let {name,value} =e.target
        // setFormData({...FormData,[name]:value})
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setUserData((prev)=>[...prev,{...FormData,id:nanoid()}])
        
        setFormData({
            name:"",email:"",password:"",imageURL:""
        })
        setToggle((prev) => !prev)

    }
  return (
    <div className='w-[400px] self-center'>
        <form
                onSubmit={handleSubmit}
                className='flex flex-col w-40% gap-4 '>
            <input 
                required
                type="text" 
                name="name" 
                id="name" 
                value={FormData.name}
                onChange={(e) =>    handleChange(e)}
                className='bg-gray-700 text-2xl text-cyan-100 rounded-sm  px-3'
                placeholder='Name.....'
            />

            <input 
                required
                type="text" 
                name="email" 
                id="email" 
                value={FormData.email}
                onChange={(e) =>    handleChange(e)}
                className='bg-gray-700 text-2xl text-cyan-100 rounded-sm  px-3'
                placeholder='Email.....'
            />

            <input 
                
                type="url" 
                name="imageURL" 
                id="imageURL"
                value={FormData.imageURL}
                onChange={(e) => handleChange(e)}
                className='bg-gray-700 text-2xl text-cyan-100 rounded-sm   px-3'
                placeholder="Image URL"
                 />
            <input 
                required
                type="text" 
                name="password" 
                id="password" 
                value={FormData.password}
                onChange={(e) =>    handleChange(e)}
                placeholder='Password'
                className='bg-gray-700 text-2xl text-cyan-100 rounded-sm   px-3'/>

            <button 

                className='bg-blue-900 rounded-sm cursor-pointer hover:bg-blue-700'
                >Submit</button>

        </form>
    </div>
  )
}

export default Form
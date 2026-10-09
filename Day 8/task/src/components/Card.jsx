import React from 'react'

const Card = ({user,setUserData}) => {
  let {name,email,imageURL,id} = user
  return (
    <div className='text border-2 border-gray-600 rounded-lg p-5'>
        <div className='w-[100%] aspect-square   border-2 border-blue-700  rounded-md'>
                <img 
                    src={imageURL} 
                    alt={name} />
        </div>
        <h1>{name}</h1>
        <p>{email}</p>
        <div className=" w-[100%] flex justify-between px-3 my-2">
            <button 
                className='bg-green-800 px-2 rounded-md hover:bg-green-600 cursor-pointer'

                >Update</button>
            <button 
                className='bg-red-800 px-2 rounded-md hover:bg-red-600 cursor-pointer'
                onClick={setUserData((prev) => prev.filter((i) => i.id !== id))}
                >Delete</button>
        </div>
    </div>
  )
}

export default Card
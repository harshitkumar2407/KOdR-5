import React from 'react'

const Header = () => {
  return (
    <div className=' w-full bg-gray-800 text-amber-100 flex justify-between px-5 items-center'>
        <div className="logo">Harshit</div>
        <div className='flex gap-2 text-sm items-center'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
        <div>
            <button
                className='bg-blue-700 rounded px-2 my-2'
            >Sign Up</button>
        </div>
    </div>
  )
}

export default Header
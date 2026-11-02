import React from 'react'

const Header = ({setToggle}) => {
  return (
    <div className='flex justify-between px-4 py-2'>
        <div>
            LOGO
        </div>
        <div className='flex gap-5 '>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact us</a>
            <a href="">Explore</a>
        </div>
        <div >
            <button  className='bg-blue-900 mx-4 px-5 rounded-sm '
                onClick={() => setToggle((prev) => !prev )}
            >Add</button>
        </div>
    </div>
  )
}

export default Header
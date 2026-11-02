import React, { useContext } from 'react'
import { MyStore } from '../context/ProductContext'
const Navbar = () => {
    const {theme,setTheme} = useContext(MyStore)
    const textColor = theme ? 'text-gray-800' : 'text-gray-400'
    const backgroundColor = theme ? 'bg-white' : 'bg-gray-900'
    const borderColor = theme ? 'border-gray-200' : 'border-gray-700'

  return (
    <nav className={`flex items-center justify-between px-[10px] py-[10px] ${textColor} transition-colors duration-500`}>
        <div>LOGO</div>
        <div className="flex items-center justify-between gap-[10px]">
            <a className={`${textColor} no-underline transition-colors duration-500`} href="#">Home</a>
            <a className={`${textColor} no-underline transition-colors duration-500`} href="#">About</a>
            <a className={`${textColor} no-underline transition-colors duration-500`} href="#">Home</a>
        </div>
        <div className="flex items-center justify-between gap-[10px]">
            <button 
                className={`h-[30px] w-[30px] rounded-full border-[1.5px] ${borderColor} ${backgroundColor} px-[6px] py-[2px] font-[Arial,sans-serif] text-[13.3333px] ${textColor} transition-colors duration-500`}
                onClick={()=> setTheme(()=> !theme)} >
                {theme ? "🌒":"☀️"}
                </button>
                <button className={`rounded-md border-1 ${borderColor} ${backgroundColor} px-3 py-1.5 font-[Arial,sans-serif] text-[13.3333px] ${textColor} transition-colors duration-500`}>
                    {/* <button> */}
                    Cart
                </button>

        </div>
    </nav>
  )
}

export default Navbar
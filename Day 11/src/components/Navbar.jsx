import React, { useContext } from 'react'
import "./style/Navbar.css"
import { MyStore } from '../context/ProductContext'
const Navbar = () => {
    const {theme,setTheme} = useContext(MyStore)
  return (
    <nav>
        <div className='.logo'>LOGO</div>
        <div className='links'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Home</a>
        </div>
        <div className='btns'>
            <button 
                className='theme_icon'
                onClick={()=> setTheme(()=> !theme)} >
                {theme ? "🌒":"☀️"}
                </button>
                <button>
                    Cart
                </button>

        </div>
    </nav>
  )
}

export default Navbar
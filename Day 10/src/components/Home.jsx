import React from 'react'
import { useContext } from 'react'
import { Ui_Theme } from '../context/ThemeContext'
import Header from './Header'
import { UserInfo } from '../context/MyContext'

const Home = () => {
    let {theme,setTheme,} = useContext(Ui_Theme)
    const {toggle, setToggle} = useContext(UserInfo)
  return (
    <div>
        <Header/>
        {/* {toggle ? } */}

    </div>
  )
}

export default Home
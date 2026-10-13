import React, { useContext, useEffect, useState } from 'react'

import './App.css'
import ProductsPage from './components/ProductsPage.jsx'
import { MyStore } from './context/ProductContext.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {

    const {theme,setTheme}=useContext(MyStore)

    return (   

        <div className={theme ? "root":"dark"}>
            <Navbar/>
            {theme ? <h1>light</h1>: <h1>Dark</h1> }


            <ProductsPage/>
        </div>
    )
}

export default App

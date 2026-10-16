import React, { useContext } from 'react'

import './App.css'
import ProductsPage from './components/ProductsPage.jsx'
import { MyStore } from './context/ProductContext.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {

    const {theme}=useContext(MyStore)

    return (   

        <div
            className={`${theme ? "root" : "dark"} min-h-screen bg-[var(--bg-pri)] [transition:background-color_0.8s_ease,color_0.5s_ease,border-color_0.5s_ease]`}
        >
            <Navbar/>
            {/* {theme ? <h1>light</h1>: <h1>Dark</h1> } */}


            <ProductsPage/>
        </div>
    )
}

export default App

import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import About from './About'
// import { useContext } from 'react'
// import { MyStore } from '../context/MyContext'

const Home = () => {
    let {data}=useContext(MyStore)


    // let {data} =useContext(MyStore)
  return (
    <div>Home {data}
    <About/>
    </div>
  )
}

export default Home
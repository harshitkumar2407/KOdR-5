import React from 'react'
import { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const About = () => {
  let {data} =useContext(MyStore)
  return (
    <div>
        About {data}
    </div>
  )
}

export default About
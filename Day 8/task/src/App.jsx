import React,{useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Card from './components/Card'
import UserCards from './components/UserCards'
// import "./App.css"



const App = () => {
  const [userData, setUserData] = useState([])
  const [toggle, setToggle] = useState(true)
  console.log(userData);
  
  return (
    <div>
      
        <Header setToggle={setToggle}/>
        {toggle ? 
            <UserCards  userData={userData} setUserData={setUserData}/> : 
            <Form setUserData={setUserData} setToggle={setToggle} userData={userData}/> }
    </div>)
}

export default App
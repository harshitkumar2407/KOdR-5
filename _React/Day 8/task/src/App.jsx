import React,{useState} from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Card from './components/Card'
import UserCards from './components/UserCards'
// import "./App.css"



const App = () => {
  const [userData, setUserData] = useState([])
  const [toggle, setToggle] = useState(true)
  const [isEdited, setIsEdited] = useState(null)
  console.log(userData);
  
  return (
    <div>
      
        <Header setToggle={setToggle}/>
        {toggle ? 
            <UserCards  
				userData={userData} 
				setUserData={setUserData} 
				setIsEdited ={setIsEdited}
				setToggle ={setToggle}
				/> : 
            <Form 
				setUserData={setUserData} 
				setToggle={setToggle} 
				userData={userData} 
				isEdited={isEdited}
				setIsEdited ={setIsEdited} 
				/> }
    </div>)
}

export default App
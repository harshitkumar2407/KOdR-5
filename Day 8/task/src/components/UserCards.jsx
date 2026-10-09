import React from 'react'
import Card from './Card'

const UserCards = ({userData,setUserData}) => {
  return (
    <div className='grid gap-2 grid-cols-4'>
        {userData.map(
            (val, index) => 
                <Card key={index} user={val} setUserData={setUserData}/>)}
    </div>
  )
}

export default UserCards
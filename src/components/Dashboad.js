import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode'

function Dashboad() {
    const [userName, setUserName] = useState('')
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt(token)
            setUserName(user?.email)
            console.log(user)
            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/login'
            }
            else{
               // populateQuote()
            }
        }
    },[])

  return (
    <div>
        <h2>{`This is a dashboard ${userName}`}</h2>
    </div>
  )
}

export default Dashboad

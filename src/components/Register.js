import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Register = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleSubmit = ()=>{
      console.log(name, email, password)
      const url = 'http://localhost:5000/auth/sign-up'
      axios.post(url,{
        name: name,
        email: email,
        password: password
      },{
        headers: {
          'Content-Type' : 'application/json'
        }
      })
      .then((res)=>{
        console.log(res?.data)
        if(res?.data?.success){
          localStorage.setItem('token',res?.data?.token)
          //window.location.href = '/dashboard'
          
        }
      })
      .catch((error)=>{
        console.log('error -->', error)
      })
    }
    return (
      <div className="app">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          value={name}
          placeholder='Enter name here' 
          onChange={(e)=>{setName(e.target.value)}} /> <br />
  
          <input
          type="email"
          value={email}
          placeholder='Enter email here' 
          onChange={(e)=>{setEmail(e.target.value)}} /> <br />
  
          <input
          type="password"
          value={password}
          placeholder='Enter password here' 
          onChange={(e)=>{setPassword(e.target.value)}} /> <br />
  
          <Button onClick={handleSubmit}>Submit</Button>
        </form>
      </div>
    );
}

export default Register
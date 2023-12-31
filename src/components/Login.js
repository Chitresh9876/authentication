import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Login() {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
      
        const handleSubmit = ()=>{
          console.log(email, password)
          const url = 'http://localhost:5000/auth/sign-in'
          axios.post(url,({
            email: email,
            password: password
          }),{
            headers: {
              'Content-Type' : 'application/json'
            }
          })
          .then((res)=>{
            console.log(res?.data)
            if(res){
              if(res?.data?.success){
                localStorage.setItem('token', res?.data?.token)
                window.location.href = '/dashboard'
              }
            }
            else{
              alert('Enter correct Credentials')
            }
          })
          .catch((error)=>{
            console.log('error -->', error)
          })
        }
        return (
          <div className="app">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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

export default Login

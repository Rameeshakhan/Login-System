import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const handle  = () =>{
    navigate("/register")
  }
  return (
    <div>
        <h1>Welcome to Login System</h1>
        <button onClick={handle}>Register Yourself</button>
    </div>
  )
}

export default Landing
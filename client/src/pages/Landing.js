import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/css/landing.css"
import landing from '../assets/images/landing.png'

const Landing = () => {
  const navigate = useNavigate()
  const handle  = () =>{
    navigate("/register")
  }
  return (
    <div className='container'>
        <div className='left'>
        <h1 className='heading'>Welcome to Login System</h1>
        <p className='text'>A User Login application built using MERN Stack. FrontEnd is built using ReactJs and backend is built on Nodejs also the database used is mongoDb where user data is being stored. A practice application using the specific stack for learning purpose </p>
        <button className='btn' onClick={handle}>Register Yourself</button>
        </div>
        <div className='right'>
        <img src={landing} alt="BigCo Inc. logo"/>
        </div>
    </div>
  )
}

export default Landing
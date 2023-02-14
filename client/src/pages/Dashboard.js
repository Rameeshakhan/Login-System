import React from 'react'
import dashboard from '../assets/images/dashboard.png'

const Dashboard = () => {
  return (
   <>
    <div className='dashboard'>
          <img src={dashboard} alt="BigCo Inc. logo"/>
    </div>
    <button className='btn dash'>About US</button>
    <div>
      <p>This is paragraph added by Me in this project</p>
    </div>
   </>
  )
}

export default Dashboard
import React from 'react'
import './module.Home.css'
import homeicon from '../../assets/home.png'
import lock from '../../assets/Vectorlock.png'

const Home = () => {
  return (
    <div className='home'>
      <img src={homeicon} alt="home" />
      <div className='title-name'>
        Pocket Notes
      </div>
      <div className='description'>
      Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </div>
      <div className='e2e-container'>
        <img src={lock} alt="" />
        <div className='e2e'>end-to-end encrypted</div>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './Navbar'

const Acceuil = () => {
  return (
    <div>
    <Navbar />
    <div className='box-home'>
    <div className='partie-text'>
    <h1>Time to travel</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div>
    <button className='btn-reserver'>Book</button>
    </div>
    </div>
      <img src='https://freepngimg.com/thumb/bus/30-bus-png-image.png'/>
      </div>
      </div>
  )
}

export default Acceuil

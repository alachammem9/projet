import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const isAuth = localStorage.getItem("token");
  return (
    <div className='menu-bar'>
    <img src='https://www.freepnglogos.com/uploads/bus-png/file-bus-svg-wikimedia-commons-29.png' />
        <ul className='menu-list'>
        <Link to="/"><li>Acceuil</li></Link>
        <Link to="/bus"><li>Réservation</li></Link>
        {isAuth? <Link to="/profil"> <li className='btn-orange'> Profile</li> </Link>:
        <Link to="/register"> <li className='btn-orange'> Se Connecter</li> </Link>}
        </ul>
  </div>
     )
}

export default Navbar

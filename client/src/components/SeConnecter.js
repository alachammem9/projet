import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux';
import { userRegister } from '../JS/userSlice/userSlice';
import { Link, useNavigate } from "react-router-dom";

const SeConnecter = () => {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
    <Navbar />
  <div className='box-home'>
  <div className='partie-text'>
  <h1>Time to Register</h1>
  <div className='box-form'>
  <div className='box-input'  >
  <label> First Name: </label><input type='text' placeholder=' First name'onChange={(e) => setregister({ ...register, name: e.target.value })}/></div>
  <div className='box-input'>
  <label>Last name: </label><input type='text' placeholder='Last name'onChange={(e) => setregister({ ...register, lastname: e.target.value })}/></div>
  <div className='box-input'>
  <label>E-mail Adress: </label><input type='text' placeholder='E-mail Adress'onChange={(e) => setregister({ ...register, email: e.target.value })}/></div>
  <div className='box-input'>
  <label>Number Phone: </label><input type='text' placeholder='Number Phone'onChange={(e) => setregister({ ...register, phone: e.target.value })}/></div>
  <div className='box-input'>
  <label>Password: </label><input type='text' placeholder='Password'onChange={(e) => setregister({ ...register, password: e.target.value })}/></div>
  <button className='btn-reserver'  onClick={(e) => {
                e.preventDefault();
                dispatch(userRegister(register),navigate("/profil"));
            }}>Sign Up</button>
  </div>
  <h3>
            u already have account <Link to="/login">sign in </Link>
          </h3>
  </div>
 
    <img src='./images/image-removebg-preview.png' className='box-imgconnecté'/>
    </div>
    </div>
  )
}

export default SeConnecter

import React, { useState } from 'react'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux';
import { userLogin, userRegister } from '../JS/userSlice/userSlice';
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [login, setlogin] = useState({
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
  <h1>Time to login</h1>
  <div className='box-form'>
  <div className='box-input'  >
  <label>E-mail Adress: </label><input type='text' placeholder='E-mail Adress'onChange={(e) => setlogin({ ...login, email: e.target.value })}/></div>
  <div className='box-input'>
  <label>Password: </label><input type='text' placeholder='Password'onChange={(e) => setlogin({ ...login, password: e.target.value })}/></div>
  <button className='btn-reserver'  onClick={(e) => {
                e.preventDefault();
                dispatch(userLogin(login));
                navigate("/profil")
            }}>Login</button>
  </div>
  </div>
 
    <img src='./images/image-removebg-preview.png' className='box-imgconnecté'/>
    </div>
    </div>
  )
}

export default Sign

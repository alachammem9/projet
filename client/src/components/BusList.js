
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getreserv } from "../JS/reservslice/reservslice";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const BusList = () => {
    const dispatch= useDispatch()
    useEffect(() => {
      dispatch(getreserv())
    }, [])
    const listbus=useSelector((store)=>store.reserve?.reserv)
    console.log("listbus",listbus)
    const isAuth = localStorage.getItem("token");
  return (
    <div>
    <Navbar />
    <div className="box-reservebus">
      <div className="partie-text reser">
        <h1>Time to bus</h1>
      </div>
      <img src="./images/bussss.png" />
      <div className="box-imagebus">
      {listbus?.map((bus)=>(
        <div>
        <div className="box-form2bus">
          <div className="box1-input">
          <i class="fa-solid fa-bus"></i>
            <input  value={bus.trajet} />
          </div>
          <div className="box1-input">
          <i class="fa-solid fa-bus"></i>
            <input  value={bus.capacité} />
          </div>
          <div className="box1-input">
          <i class="fa-solid fa-bus"></i>
            <input  value={bus.date} />
          </div>
          <div className="box1-input">
          <i class="fa-solid fa-bus"></i>
            <input  value={bus.temps} />
          </div>
{isAuth?<Link to={`/reserve/${bus._id}`}> <button className="btn-reserverbus">Réserver</button></Link>:<Navigate to="/login" />}
          
        </div>
        </div>))}
        
      </div>
    </div>
    </div>
  );
};

export default BusList;

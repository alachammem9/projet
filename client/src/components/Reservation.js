import React, { useEffect,useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import axios from "axios";
import { getreservbyid, reserve } from "../JS/reservslice/reservslice";
import { useDispatch, useSelector } from "react-redux";

const Reservation = () => {
  const [newreserve, setnewreserve] = useState({
    
  })
  const params=useParams()
  const busId=params.id
  const dispatch=useDispatch()
  const user=useSelector((store)=>store.user?.user)
  console.log(user)
  const [nbrplace, setnbrplace] = useState(0)
  return (
    <div>
    <Navbar />
    <div className="box-reserve">
      <div className="partie-text reser">
        <h1>Time to Reserve</h1>
      </div>
      <div className="box-image">
        <div className="box-form2">
          <div className="box1-input">
            <i class="fa-solid fa-users"></i>
            <input type="Number" placeholder="1 passager" onChange={(e)=>setnbrplace(e.target.value)}/>
          </div>
          <button className="btn-reserver" onClick={()=>dispatch(reserve({id:busId,reserve:{name:user?.name,id:user._id,nbr_place:nbrplace}}))}>Réserver</button>
        </div>
        <img src="./images/reserve.png" />
      </div>
    </div>
    </div>
  );
};

export default Reservation;

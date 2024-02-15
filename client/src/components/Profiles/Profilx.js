import React, { useEffect, useState } from "react";
import './profil.css'
import { useDispatch, useSelector } from "react-redux";
import { logout, updatuser, userCurrent } from "../../JS/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { deletereserv, getreserv } from "../../JS/reservslice/reservslice";

const Profil = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [menu, setmenu] = useState(0)
    useEffect(() => {
      if (isAuth) {
        dispatch(userCurrent()); 
      }
      dispatch(getreserv())
    }, []);
    const user=useSelector((store)=>store.user?.user)
    console.log(user)
const [userup, setuserup] = useState({
  name:user?.name,
  lastname:user?.lastname,
  // phone:user?.phone,
  email:user?.email,
  password:user?.password,
})

const listbus=useSelector((store)=>store.reserve?.reserv)
const [mres, setmres] = useState([])
console.log("dsgdfhfgh",mres)
const selection=()=>{
  listbus.map((e)=>e.réservation.map((x)=>x.id==user._id?setmres([...mres, x]):null))
}

  return (
    <div className="boxprofie">
      <div className="boxinformation">
        <img src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png" />
        <h1>{user?.name} {user?.lastname}</h1>
        <p>{user?.phone}</p>
        <button className="btn-logout" onClick={() => {
            dispatch(logout());
            navigate("/");
          }}>Logout</button>
      </div>
      <div className="boxcontent">
        <ul>
          <li onClick={()=>setmenu(0)}>Profile</li>
          <li onClick={()=>(selection(),setmenu(1))}>Reservation</li>
        </ul>
        <div className="boxcontenu">
            {menu==0?(<>
                <h1>Mes Informations Perso</h1>
                <input type="text" value={user?.name}/>
                <input type="text" value={user?.lastname}/>
                <input type="email" placeholder={user?.email} onChange={(e)=>setuserup({...userup,email:e.target.value})}/>
                {/* <input type="text" placeholder={user?.phone} onChange={(e)=>setuserup({...userup,phone:e.target.value})}/> */}
                <input type="password" placeholder={user?.password} onChange={(e)=>setuserup({...userup,password:e.target.value})}/>
                <button className="btn-reserver" onClick={()=>dispatch(updatuser({id:user?._id, upuser:userup}))}>Update</button>
            </>):(<>
              <div className="boxcontenu">
            <h1>Mes Réservations</h1>
            {mres?
            mres?.map((el)=>(
              <><input type="text" value={el?.nbr_place}/>
                <button className="btn-reserver">Delete</button>
                </>
            )):null}
                
         </div>
          </>)}
        </div>
      </div>
    </div>
  );
};

export default Profil;

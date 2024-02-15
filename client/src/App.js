import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profiles/Profilx";
import PrivateRoute from "./routes/PrivateRoute";
import Acceuil from "./components/Acceuil";
import SeConnecter from './components/SeConnecter'
import Reservation from "./components/Reservation";
import BusList from "./components/BusList";
import Sign from "./components/Sign";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Acceuil />} />
        <Route exact path="/register" element={<SeConnecter />} />
        <Route exact path="/reserve/:id" element={<Reservation />} />
        <Route exact path="/bus" element={<BusList />} />
        <Route path="/login" element={<Sign />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;

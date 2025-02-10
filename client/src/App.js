import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./redux/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import { getreservation } from "./redux/reservationSlice";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getreservation());
  });
  return (
    <div className="App">
      Home
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { userCurrent } from "./redux/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import { getreservation } from "./redux/reservationSlice";
import NavBarr from "./components/NavBarr";
import Home from "./components/Home";
import Footer from "./components/Footer";
import New_Home from "./components/New_Home";
import BookReservation from "./components/Reservation";
import Services from "./components/Services";
import Shop from "./components/Shop";
import Test from "./components/Test";



function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getreservation());
  },[ping])
  return (
    <div className="App">
      <NavBarr/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/profil" element={<Profil />} />
        <Route path="/" element={<New_Home />} />
        <Route path="/add" element={<BookReservation ping={ping} setping={setping} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/test" element={<Test />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

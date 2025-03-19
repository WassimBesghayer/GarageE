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
import Footer from "./components/Footer";
import Home from "./components/Home";
import BookReservation from "./components/Reservation";
import Shop from "./components/Shop";
import Orders from "./components/Orders";
import Blog from "./components/Blog";
import Favorites from "./components/Favorites";
// import Dashboard from "./components/Dashboard";



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
        <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        <Route path="/favorites" element={<Favorites ping={ping} setping={setping} />} />
        <Route path="/user/booking" element={<BookReservation ping={ping} setping={setping} />} />
        <Route path="/shop" element={<Shop ping={ping} setping={setping}/>} />  
        <Route path="/user/order" element={<Orders ping={ping} setping={setping}/>} />  
        <Route path="/blog" element={<Blog />} />  
        <Route path="/" element={<Home />} />
        
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

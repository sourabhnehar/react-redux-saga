import "./App.css";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {

  const auth = useSelector(state=> state.auth);
  useEffect(()=>{
    console.log(auth)
  },[auth])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

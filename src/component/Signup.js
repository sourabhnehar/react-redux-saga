import React, { useState } from "react";
import { signup } from "../store/authAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({})
    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSignup = () => {
        dispatch(signup(formData, navigate));
    };
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        <input type="password" name='password' onChange={handleChange} placeholder="Password" />
        <button type="button" onClick={handleSignup}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authAction';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({})
    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleLogin = () => {
        dispatch(login(formData, navigate));
    };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="email" name="email" onChange={handleChange} placeholder="Email" />
        <input type="password" name='password' onChange={handleChange} placeholder="Password" />
        <button type="submit" onClick={handleLogin}>Login</button>
      
    </div>
  );
};

export default Login;

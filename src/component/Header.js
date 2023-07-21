import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#00bcd4', // Add color to the header background
    color: '#fff', // Add color to the text
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  
  const menuItemStyle = {
    marginRight: '20px',
    fontWeight: 'bold',
    color: '#fff', // Add color to the menu item text
    textDecoration: 'none',
    cursor: 'pointer',
  };  

const Header = () => {
const { cart } = useSelector((state) => state);

  return (
    <div style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={menuItemStyle}>Home</Link>
        <Link to='/cart' style={menuItemStyle}>Cart ({cart.length})</Link>
      </div>
    </div>
  );
}

export default Header;




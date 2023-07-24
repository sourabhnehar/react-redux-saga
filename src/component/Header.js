import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#00bcd4',
  color: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const menuItemStyle = {
  marginRight: '20px',
  fontWeight: 'bold',
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
};

const searchBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '4px 8px',
};

const inputStyle = {
  border: 'none',
  outline: 'none',
  background: 'transparent',
  marginLeft: '4px',
  color: '#333',
};

const Header = () => {
  const { cart, products } = useSelector((state) => state);
  const [productList, setProductList] = useState()

  const handleSearchProduct=(e)=>{
    let productName = e.target.value;
    // const searchProducts = products.filter(item=>
    //   item.first_name.toLowerCase().includes(productName.toLowerCase())
    // )
    // setProductList(searchProducts)
  }
  return (
    <div style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/' style={menuItemStyle}>
          Home
        </Link>
        <Link to='/cart' style={menuItemStyle}>
          Cart ({cart.length})
        </Link>
        <Link to='/login' style={menuItemStyle}>
          login
      </Link>
      <Link to='/signup' style={menuItemStyle}>
          Signup
      </Link>
      </div>
     
    </div>
  );
};

export default Header;

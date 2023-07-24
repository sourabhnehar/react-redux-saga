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
      </div>
      <div style={searchBoxStyle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          viewBox='0 0 24 24'
          width='24'
          fill='#333'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M15.5 14h-.79l-.28-.27C16.41 12.61 17 11.11 17 9.5 17 5.91 14.09 3 10.5 3S4 5.91 4 9.5 6.91 16 10.5 16c1.61 0 3.11-.59 4.23-1.57l.27.28v.79l4 3.99L18.49 18l-3.99-4zm-5 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
        </svg>
        <input
          type='text'
          placeholder='Search...'
          style={inputStyle}
          onChange={handleSearchProduct}
        />
      </div>
    </div>
  );
};

export default Header;

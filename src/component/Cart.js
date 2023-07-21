import React from 'react';
import { useSelector } from "react-redux";

const Cart = () => {
const { cart } = useSelector((state) => state);

  return (
    <div className="cart-detail">
      <h2>Cart Detail</h2>
      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.avatar} alt={item.first_name} />
          <div className="item-details">
            <h3>{item.first_name} {item.last_name} </h3>
            <p>Name: {item.first_name}</p>
            <p>Email: {item.email}</p>
          </div>
        </div>
      ))}
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;

import React from "react";
import { addToCart, emptyCart, removeFromCart } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../store/productAction";
import { useEffect } from "react";

const Homepage = () => {
  const dispatch = useDispatch();
  const { products, cart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>

      {/* Products list */}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.avatar}
                alt="img"
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <p>
                {product.first_name} {product.last_name}
              </p>
              <p>{product.email}</p>
              <div>
                {cart && cart.some((val) => val.id === product.id) ? (
                  <>
                    <button style={{ color: "green" }}>Added</button>
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <button onClick={() => dispatch(addToCart(product))}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;

// ShoppingCart.js
import React from "react";

const ShoppingCart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.getItems().map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - quantity:
            {cart.getQuantity(item.id)}
          </li>
        ))}
      </ul>
      <h6>Total ${cart.getTotal()}</h6>
    </div>
  );
};

export default ShoppingCart;

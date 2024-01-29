import React from "react";
import { CartItem } from "../cart";

interface ShoppingCartProps {
  cart: {
    getItems: () => CartItem[];
    getQuantity: (productId: number) => number;
    getTotal: () => number;
  };
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.getItems().map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h6>Total ${cart.getTotal()}</h6>
    </div>
  );
};

export default ShoppingCart;

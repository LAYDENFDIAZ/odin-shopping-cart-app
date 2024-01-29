// Home.js
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { downloadProducts } from "../data/productsApi";
import ShoppingCart from "../components/ShoppingCart";
import { createCart } from "../cart";
import { Button } from "react-bootstrap";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(createCart());

  useEffect(() => {
    // Fetch products and update state
    downloadProducts(setProducts);

    // Load cart items from local storage

    /*const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCart(JSON.parse(storedCartItems));
    }*/
  }, []);

  const addToCart = (product) => {
    const updatedCart = cart;
    updatedCart.addItem(product);
    updatedCart.log();
    // Update state
    setCart({ ...updatedCart });

    // Update local storage
    //localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  let quantity = 0;

  return (
    <div className="container mb-4">
      <ShoppingCart cart={cart} />

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard {...product} />

            {cart.getQuantity(product.id) === 0 ? (
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            ) : (
              <div className="d-flex align-items-center flex-column mt-2">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <Button>-</Button>
                  <div>
                    <span className="fs-3">{cart.getQuantity(product.id)}</span>{" "}
                    in cart
                  </div>
                  <Button>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

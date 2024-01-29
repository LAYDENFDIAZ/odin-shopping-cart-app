import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { downloadProducts } from "../data/productsApi";
import ShoppingCart from "../components/ShoppingCart";
import { createCart } from "../cart";
import { Button } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
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

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart.addItem(product);
      updatedCart.log();
      return updatedCart;
    });
  };

  const removeItemFromCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart.removeItem(product.id);
      updatedCart.log();
      return updatedCart;
    });
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart.increaseQuantity(productId);
      updatedCart.log();
      return updatedCart;
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart.decreaseQuantity(productId);
      updatedCart.log();
      return updatedCart;
    });
  };

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
                  <Button onClick={() => decreaseQuantity(product.id)}>
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{cart.getQuantity(product.id)}</span>{" "}
                    in cart
                  </div>
                  <Button onClick={() => increaseQuantity(product.id)}>
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItemFromCart(product)}
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

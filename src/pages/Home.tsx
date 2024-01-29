import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { downloadProducts } from "../data/productsApi";

const dummyProducts = [
  {
    id: 1,
    title: "Classic White Shirt",
    price: 29.99,
    category: "Clothing",
    description: "A comfortable and stylish white shirt for everyday wear.",
    image: "https://example.com/shirt1.jpg",
  },
  {
    id: 30,
    title: "Casual Jeans",
    price: 39.99,
    category: "Clothing",
    description: "Relaxed-fit denim jeans suitable for various occasions.",
    image: "https://example.com/jeans30.jpg",
  },
];

function Home() {
  const [products, setProducts] = useState(dummyProducts);

  useEffect(() => {
    downloadProducts(setProducts);
  }, []);

  return (
    <div className="container mb-4">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import React from "react";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  category,
  price,
  image,
}) => {
  return (
    <div key={id} className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <strong>Category:</strong> {category}
        </p>
        <p className="card-text">
          <strong>Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-container">
      {product.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)} className="product-item">
          <div className="product-image">
            <img src={require(`../../assets/${item.image}`)} alt={item.name} />
          </div>
          <div className="product-name">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;

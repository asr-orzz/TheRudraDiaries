import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleProductClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="product-container">
      {product.slice().reverse().map((item) => ( 
        <div key={item.id} onClick={() => { handleClick(item.id); handleProductClick(); }} className="product-item">
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

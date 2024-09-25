import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = ({ productList }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to navigate back
  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Replace multiple line breaks with <br /> for spacing
  const formattedContent = product.content.split('\n').map((line, index) => {
    if (line.trim() === '') {
      return <br key={index} />; // Add a <br /> for empty lines
    }
    return <p key={index}>{line}</p>; // Return a <p> for non-empty lines
  });

  return (<>

    <div className="product-details">
      
    <button className="back-button" onClick={() => navigate(-1)}>
    &larr; Back
     </button>
      <h1>{product.name}</h1>
      <div>{formattedContent}</div>
      <h2><br /> ~ Rudra</h2>
    </div>
    </>
  );
};

export default ProductDetails;

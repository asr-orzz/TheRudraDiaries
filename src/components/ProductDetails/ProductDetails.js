import React from 'react';
import { useParams} from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = ({ productList }) => {
  const { id } = useParams();
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
          <h1>{product.name}</h1>
          <div>{formattedContent}</div>
          <h2><br /> ~ Rudra</h2>
    </div>
    </>
  );
};

export default ProductDetails;

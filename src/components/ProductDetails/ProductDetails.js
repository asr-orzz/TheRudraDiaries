import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

const ProductDetails = ({ productList }) => {
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  // Function to format content: Replace _word_ with <i><strong>word</strong></i> and handle line breaks
  const formatContent = (text) => {
    return text.split('\n').map((line, index) => {
      // Find and replace words between underscores with <i><strong></strong></i>, and add a space after every italic word
      let formattedLine = line.replace(/_(.*?)_/g, (match, p1) =>
        `<i>${p1}</i><span style="color: transparent;">.</span>` // Adding invisible span after the italicized word
      );
      // Adding space after </i>
      return (
        <p key={index} dangerouslySetInnerHTML={{ __html: formattedLine }} />
      );
    });
  };

  return (
    <>
      <div className="product-details">
        <h1>{product.name}</h1>
        <div>{formatContent(product.content)}</div>
        <h2><br /> ~ Rudra</h2>
      </div>
    </>
  );
};

export default ProductDetails;

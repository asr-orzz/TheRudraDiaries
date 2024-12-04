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
    // Split text by multiple newlines (\n\n or more) for separate paragraphs
    const paragraphs = text.split(/\n{2,}/);
    
    return paragraphs.map((para, index) => {
      // Replace single underscores with italic tags
      const formattedLines = para.split('\n').map((line) =>
        line.replace(/_(.*?)_/g, (match, p1) => `<i>${p1}</i>`)
      );

      // Join lines back with <br /> for single newlines within the same paragraph
      return (
        <p
          key={index}
          dangerouslySetInnerHTML={{ __html: formattedLines.join('<br />') }}
        />
      );
    });
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <div>{formatContent(product.content)}</div>
      <h2><br /> ~ Rudra</h2>
    </div>
  );
};

export default ProductDetails;


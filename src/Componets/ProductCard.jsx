import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://in3.dev/vinted/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className={'ProductCard-container'}>
        <p>CONTENT</p>
      </div>
    </>
  );
};

export default ProductCard;

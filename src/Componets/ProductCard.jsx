import React from 'react';

const ProductCard = ({ productId }) => {
  return (
    <>
      <div className={'ProductCard-container'}>
        <p>{productId}</p>
      </div>
    </>
  );
};

export default ProductCard;

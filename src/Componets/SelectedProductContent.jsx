import React from 'react';

function SelectedProductContent({ user, product, brand }) {
  console.log(product);
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-gallery">Content</div>
        <div className="product-info">
          <span className="product-price">{product.price + ' €'}</span>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductContent;

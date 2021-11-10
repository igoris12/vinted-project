import React from 'react';

function SelectedProductContent({ user, product, brand }) {
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-gallery">Content</div>
        <div className="product-info">
          <span className="product-price">{product.price + ' €'}</span>
          <div className="brand">
            <p>PREKĖS ŽENKLAS</p> <a href="#">{brand.title}</a>
          </div>
          <div className="size">
            <p>DYDIS</p> <a href="#">{brand.title}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductContent;

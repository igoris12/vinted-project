import React from 'react';

function SelectedProductContent({ user, product, brand }) {
  return (
    <div className="product">
      <div className="product-container">
        <div className="product-gallery">Content</div>
        <div className="product-info">
          <span className="product-price">{product.price + ' €'}</span>
          <div className="brand">
            <p className="title">PREKĖS ŽENKLAS</p>
            <a className="value" href="#">
              {brand.title}
            </a>
          </div>
          <div className="size">
            <p className="title">DYDIS</p>
            <p className="value">
              {product.size &&
                product.size.map((size, index) => {
                  if (index < product.size.length - 1) {
                    return size + ' / ';
                  } else {
                    return size;
                  }
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedProductContent;

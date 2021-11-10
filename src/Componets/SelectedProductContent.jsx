import React from 'react';

function SelectedProductContent({ user, product }) {
  return (
    <>
      <div className="product-container">
        <div className="product gallery"></div>
        <div className="product info">CONTENT</div>
      </div>
    </>
  );
}

export default SelectedProductContent;

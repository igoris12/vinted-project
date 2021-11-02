import React from 'react';

const BrandItem = ({ content }) => {
  return (
    <>
      <div className="brand">
        <a href="#">{content.title}</a>
      </div>
    </>
  );
};

export default BrandItem;

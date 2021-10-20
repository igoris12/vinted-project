import React from 'react';
import { useState, useEffect } from 'react';

const NewOffers = ({ headerText }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productData = [];
    fetch('https://in3.dev/vinted/api/news/')
      .then((response) => response.json())
      .then((idArray) => {
        idArray.forEach((ids) => {
          fetch(`https://in3.dev/vinted/api/products/${ids.id}`)
            .then((response) => response.json())
            .then((data) => {
              productData.push(data);
            });
        });

        setProducts(productData);
      });
  }, []);
  console.log(products);

  return (
    <>
      <div className="NewOffer-container">
        <div>
          <h3>{headerText}</h3>
        </div>
        <div>Content</div>
      </div>
    </>
  );
};

export default NewOffers;

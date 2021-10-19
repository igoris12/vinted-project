import React from 'react';
import { useState, useEffect } from 'react';

const NewOffers = ({ headerText }) => {
  const [productsIds, setProductsIds] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts('https://in3.dev/vinted/api/news/').then((data) =>
      setProductsIds(data)
    );
  }, []);

  const getProducts = (link) => {
    return new Promise((resolve, reject) => {
      fetch(link).then((response) => resolve(response.json()));
    });
  };
  console.log(productsIds);
  console.log(products, 2);

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

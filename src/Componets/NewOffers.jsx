import React from 'react';
import { useState, useEffect } from 'react';

//   const getProductsIds = (link) => {
//     return new Promise((resolve, reject) => {
//       fetch(link).then((response) => resolve(response.json()));
//     });
//   };
const NewOffers = ({ headerText }) => {
  const [productsIds, setProductsIds] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://in3.dev/vinted/api/news/')
      .then((response) => response.json())
      .then((data) => setProductsIds(data));
  }, []);

  console.log(productsIds);
  // console.log(products, 2);

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

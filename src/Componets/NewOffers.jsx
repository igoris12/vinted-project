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
    getProductsIds('https://in3.dev/vinted/api/news/').then((data) =>
      setProductsIds(data)
    );
    getProducts.then((data) => {
      setProducts(data);
    });
  }, []);

  const getProductsIds = (link) => {
    return new Promise((resolve, reject) => {
      fetch(link).then((response) => resolve(response.json()));
    });
  };

  const getProducts = new Promise((resolve, reject) => {
    let products = [];
    productsIds.forEach((id) => {
      fetch('https://in3.dev/vinted/api/products/' + id.id).then((response) =>
        products.push(response.json())
      );
    });
    resolve(products);
  });

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

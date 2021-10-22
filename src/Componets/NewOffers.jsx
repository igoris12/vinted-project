import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const NewOffers = ({ headerText }) => {
  const [productsIds, setIds] = useState([]);

  useEffect(() => {
    fetch('https://in3.dev/vinted/api/news/')
      .then((response) => response.json())
      .then((data) => {
        setIds(data);
      });
  }, []);

  return (
    <>
      <div className="NewOffer-container">
        <div>
          <h3>{headerText}</h3>
        </div>
        <ul>
          {productsIds.map((id) => (
            <li>{<ProductCard productId={id.id} />}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewOffers;

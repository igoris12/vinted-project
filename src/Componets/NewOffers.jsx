import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const NewOffers = ({ headerText }) => {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    let productData = [];
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
        {ids.map((id) => (
          <i>{<ProductCard productId={id.id} />}</i>
        ))}
      </div>
    </>
  );
};

export default NewOffers;

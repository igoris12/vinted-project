import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import getId from '../Shared/Id';
import { Switch } from 'react-router-dom';

const NewOffers = ({ headerText }) => {
  const [productsIds, setIds] = useState([]);

  useEffect(() => {
    const productsIdsCopy = JSON.parse(localStorage.getItem('productsIds'));

    if (null == productsIdsCopy) {
      getData();
    } else {
      setIds(productsIdsCopy);
    }
  }, []);

  const getData = async () => {
    const data = await fetch('https://in3.dev/vinted/api/news/');
    const ids = await data.json();
    setIds(ids);
    localStorage.setItem('productsIds', JSON.stringify(ids));
  };

  return (
    <>
      <div className="NewOffer-container">
        <div className="offer-title-container">
          <h3>{headerText}</h3>
        </div>

        <ul className="productsCard-container">
          {productsIds.map((id) => (
            <li key={getId()} className="productsCard">
              {<ProductCard productId={id.id} />}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewOffers;

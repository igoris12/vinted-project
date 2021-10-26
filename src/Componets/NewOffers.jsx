import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import getId from '../Shared/Id';

const NewOffers = ({ headerText }) => {
  const [productsIds, setIds] = useState([]);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('https://in3.dev/vinted/api/news/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIds(data);
  //       console.log(data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  useEffect(() => {
    const productsIdsCopy = JSON.parse(localStorage.getItem('productsIds'));
    if (null == productsIdsCopy) {
      getData();
      return;
    }
    setIds(productsIdsCopy);
  }, []);

  const getData = async () => {
    const data = await fetch('https://in3.dev/vinted/api/news/');
    const ids = await data.json();
    setIds(ids);
    localStorage.setItem('productsIds', JSON.stringify(ids));
    for (let i = 0; i < ids.length; i++) {
      let product = await fetch(
        `https://in3.dev/vinted/api/products/${ids[i].id}`
      );
      // setProducts();
      // console.log(product);
    }
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

import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import getId from '../Shared/Id';

const NewOffers = ({ headerText }) => {
  const [productsIds, setIds] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsIdsCopy = JSON.parse(localStorage.getItem('productsIds'));

    if (null == productsIdsCopy) {
      getData();
      return;
    }
    setIds(productsIdsCopy);
    // setProducts(productsCopy);
  }, []);

  const getData = async () => {
    const data = await fetch('https://in3.dev/vinted/api/news/');
    const ids = await data.json();
    setIds(ids);
    localStorage.setItem('productsIds', JSON.stringify(ids));

    // let productsCopy = [];
    // for (let i = 0; i < ids.length; i++) {
    //   let productCall = await fetch(
    //     `https://in3.dev/vinted/api/products/${ids[i].id}`
    //   );
    //   const product = await productCall.json();
    //   productsCopy.push(product);
    // }
    // setProducts(productsCopy);
    // localStorage.setItem('products', JSON.stringify(productsCopy));
    // console.log('end');
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

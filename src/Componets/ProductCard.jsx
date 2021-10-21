import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://in3.dev/vinted/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(product);
  return (
    <>
      {product ? (
        <div className={'ProductCard-container'}>
          <div>
            <i>ICON</i>
            <p>name</p>
          </div>
          <div>
            <img src={'4'} alt="Product Image" />
          </div>
          <div>
            <b>
              <p>{product.price + ' €'} </p>
            </b>
            <p>Size</p>
            <p>color</p>
            <div>
              <i>icon</i>likes
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;

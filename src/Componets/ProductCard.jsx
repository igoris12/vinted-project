import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [main_img, setMain_img] = useState('#');

  useEffect(() => {
    fetch(`https://in3.dev/vinted/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setMain_img(data.img[data.main_img]);
      });
  }, []);
  console.log(product);
  return (
    <>
      <div className={'ProductCard-container'}>
        <div>
          <i>ICON</i>
          <p>name</p>
        </div>
        <div>
          <img src={main_img} alt="Product Image" />
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
    </>
  );
};

export default ProductCard;

import { faRandom } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState, useEffect } from 'react';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [main_img, setMain_img] = useState('#');
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    fetch(`https://in3.dev/vinted/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setMain_img(data.img[data.main_img]);
        setSizes(data.size);
      });
  }, []);

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
          <p>
            {sizes.map((size, index) => {
              if (index < sizes.length - 1) {
                return size + '/';
              } else {
                return size;
              }
            })}
          </p>
          <div>
            <svg viewBox="0 0 16 16" aria-label="Add to favourites">
              <path d="M11.73 1C9.58 1 8 2.74 8 2.74S6.42 1 4.27 1c-.7 0-1.48.2-2.28.7-2.92 1.88-2.47 5.86.34 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5-.8-.5-1.57-.7-2.28-.7m0 1.5c.5 0 .98.15 1.47.47.77.5 1.2 1.2 1.29 2.07.12 1.33-.59 2.88-1.85 4.07A79.25 79.25 0 0 1 8 13.1a79.1 79.1 0 0 1-4.64-3.98C2.1 7.93 1.39 6.37 1.51 5.05c.09-.89.52-1.59 1.3-2.08.48-.32.96-.47 1.46-.47 1.44 0 2.62 1.25 2.62 1.25L8 4.97l1.1-1.22c.02-.01 1.21-1.25 2.63-1.25"></path>
            </svg>
            <span>{Math.floor(Math.random() * 10 + 1)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

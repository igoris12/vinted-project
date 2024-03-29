import React from 'react';
import { useState, useEffect } from 'react';
import defaultImg from '../img/noAvatar.png';
import { Link } from 'react-router-dom';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [main_img, setMain_img] = useState('#');
  const [sizes, setSizes] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const productsData = JSON.parse(localStorage.getItem('products'));
    if (productsData == null) {
      getProductInfo();
    } else {
      productsData.forEach((productCopy) => {
        if (productCopy.id == productId) {
          setProduct(productCopy);
          setMain_img(productCopy.img[productCopy.main_img]);
          setSizes(productCopy.size);
          getUser(productCopy.user);
        }
      });
    }
  }, []);

  const getProductInfo = async () => {
    try {
      let data = await fetch(
        `https://in3.dev/vinted/api/products/${productId}`
      );
      const productInfo = await data.json();
      const productsData = JSON.parse(localStorage.getItem('products'));
      let productsCopy = [];
      if (productsData) {
        productsCopy = [...productsData, productInfo];
      } else {
        productsCopy = [productInfo];
      }
      setProduct(productInfo);
      setMain_img(productInfo.img[productInfo.main_img]);
      setSizes(productInfo.size);
      localStorage.setItem('products', JSON.stringify(productsCopy));
      getUser(productInfo.user);
    } catch (e) {
      console.error('Sorry you are not lucky today.');
    }
  };

  const getUser = async (id) => {
    try {
      const data = await fetch(`https://in3.dev/vinted/api/users/${id}`);
      const user = await data.json();
      setUser(user);
    } catch (e) {
      console.error('Sorry you are not lucky today.');
    }
  };

  return (
    <Link to={'/product ' + productId} className="productLink">
      <div className={'ProductCard-container'}>
        <div>
          <div className="userInfo">
            <div className="userAvatar">
              <img
                src={user.avatar ? user.avatar : defaultImg}
                alt="User avatar"
              />
            </div>
            <p className="userName">{user.name}</p>
          </div>
        </div>
        <div className="main-img-container">
          <img src={main_img} alt="Product Image" />
        </div>
        <div className="product-info-container">
          <div className="first-column">
            <b>
              <p className="product-price">{product.price + ' €'} </p>
            </b>
            <div className="product-likes">
              <div className="icon-container">
                <svg viewBox="0 0 16 16" aria-label="Add to favourites">
                  <path d="M11.73 1C9.58 1 8 2.74 8 2.74S6.42 1 4.27 1c-.7 0-1.48.2-2.28.7-2.92 1.88-2.47 5.86.34 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5-.8-.5-1.57-.7-2.28-.7m0 1.5c.5 0 .98.15 1.47.47.77.5 1.2 1.2 1.29 2.07.12 1.33-.59 2.88-1.85 4.07A79.25 79.25 0 0 1 8 13.1a79.1 79.1 0 0 1-4.64-3.98C2.1 7.93 1.39 6.37 1.51 5.05c.09-.89.52-1.59 1.3-2.08.48-.32.96-.47 1.46-.47 1.44 0 2.62 1.25 2.62 1.25L8 4.97l1.1-1.22c.02-.01 1.21-1.25 2.63-1.25"></path>
                </svg>
              </div>
              <span>{Math.floor(Math.random() * 10 + 1)}</span>
            </div>
          </div>
          <p className="prouct-sizes">
            {sizes.map((size, index) => {
              if (index < sizes.length - 1) {
                return size + ' / ';
              } else {
                return size;
              }
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

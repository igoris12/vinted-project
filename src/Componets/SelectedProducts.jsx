import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SelectedProducts = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = () => {
    const productsData = JSON.parse(localStorage.getItem('products'));
    productsData.forEach((product) => {
      if (product.id == id) {
        setProduct(product);
        getUser(product.user);
      }
    });
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

  return <>test {id}</>;
};

export default SelectedProducts;

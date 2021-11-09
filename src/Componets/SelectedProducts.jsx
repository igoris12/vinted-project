import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SelectedProducts = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = () => {
    const productsData = JSON.parse(localStorage.getItem('products'));
    productsData.forEach((product) => {
      if (product.id == id) {
        setProduct(product);
      }
    });
  };

  console.log(product);
  return <>test {id}</>;
};

export default SelectedProducts;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SelectedProductContent from './SelectedProductContent';
const SelectedProducts = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const [brand, setBrand] = useState([]);
  const [gallery, setGallery] = useState('');

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = () => {
    const productsData = JSON.parse(localStorage.getItem('products'));
    productsData.forEach((product) => {
      if (product.id == id) {
        setProduct(product);
        getUser(product.user);
        getProductBrand(product.brand);
        if (product.img.length == 3) {
          setGallery('group-3');
        } else if (product.img.length == 2) {
          setGallery('group-2');
        } else if (product.img.length == 1) {
          setGallery('group-1');
        } else {
          setGallery('group-4');
        }
      }
    });
  };

  const getUser = async (userId) => {
    try {
      const data = await fetch(`https://in3.dev/vinted/api/users/${userId}`);
      const user = await data.json();
      setUser(user);
    } catch (e) {
      console.error('Sorry you are not lucky today.');
    }
  };

  const getProductBrand = (brandId) => {
    const brandData = JSON.parse(localStorage.getItem('brands'));
    brandData.forEach((brand) => {
      if (brand.id == brandId) {
        setBrand(brand);
      }
    });
  };

  return (
    <>
      <SelectedProductContent
        user={user}
        product={product}
        brand={brand}
        gallery={gallery}
      />
    </>
  );
};

export default SelectedProducts;

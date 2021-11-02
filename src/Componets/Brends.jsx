import React, { useState, useEffect } from 'react';
import BrandItem from './BrandItem';

const Brends = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const brandsCopy = JSON.parse(localStorage.getItem('brands'));
    if (brandsCopy == null) {
      getBrands();
    } else {
      setBrands(brandsCopy);
    }
  }, []);

  const getBrands = async () => {
    try {
      const data = await fetch('https://in3.dev/vinted/api/brands/all');
      const brandsArray = await data.json();
      setBrands(brandsArray);
      localStorage.setItem('brands', JSON.stringify(brandsArray));
    } catch (e) {
      console.error('Sorry you are not lucky today.');
    }
  };

  return (
    <>
      <ul className="brands-container">
        {brands.map((brand) => (
          <li key={brand.id}>
            <BrandItem content={brand} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Brends;

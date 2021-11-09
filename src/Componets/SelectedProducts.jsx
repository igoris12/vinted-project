import React from 'react';
import { useParams } from 'react-router-dom';
const SelectedProducts = () => {
  let { id } = useParams();
  return <>test {id}</>;
};

export default SelectedProducts;

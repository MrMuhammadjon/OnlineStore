import React, { useEffect } from 'react';
import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
};

const Products = () => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1 classNameName="text-xl font-bold">Mahsulotlar</h1>
    </>
  );
};

export default Products;

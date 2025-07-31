import React, { useState } from 'react';
import Header from '../../components/header';
import Product from '../../components/product';
import Footer from '../../components/footer';

const Home = () => {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} />
      <Product cart={cart} setCart={setCart} />
      <Footer/>
    </>
  );
};

export default Home;
import { useState } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { data } from "../../data/data";

const Home = ({
  totalCartItems,
  setTotalCartItems,
  cartItems,
  setCartItems,
}) => {
  return (
    <>
      <Header totalCartItems={totalCartItems} />
      <ProductList
        data={data}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalCartItems={totalCartItems}
        setTotalCartItems={setTotalCartItems}
      />
    </>
  );
};

export default Home;

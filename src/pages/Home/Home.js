import { useState } from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { data } from "../../data/data";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header />
      <ProductList
        data={data}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
};

export default Home;

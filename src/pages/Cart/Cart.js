import Header from "../../components/Header";

const Cart = ({ totalCartItems }) => {
  return (
    <>
      <Header totalCartItems={totalCartItems} />
      <div>Cart</div>
    </>
  );
};

export default Cart;

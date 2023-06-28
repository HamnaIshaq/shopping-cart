import Header from "../../components/Header";
import "../../assets/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartTable from "../../components/CartTable";

const Cart = ({
  totalCartItems,
  setTotalCartItems,
  cartItems,
  setCartItems,
}) => {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.amount;
    });

    setSubTotal(total);
  }, [cartItems]);

  const incrementAmountInCart = (productId) => {
    setTotalCartItems(totalCartItems + 1);

    setCartItems((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (newItem.id === productId) {
          return { amount: newItem.amount++, ...newItem };
        }
        return newItem;
      });
    });
  };

  const decrementAmountInCart = (productId) => {
    setTotalCartItems(totalCartItems - 1);

    setCartItems((prevState) => {
      return prevState.map((item) => {
        const newItem = { ...item };
        if (newItem.id === productId) {
          return { amount: newItem.amount--, ...newItem };
        }
        return newItem;
      });
    });
  };

  const deleteProductFromCart = (productId) => {
    setTotalCartItems(totalCartItems - 1);

    setCartItems((prevState) => {
      return prevState.filter((item) => {
        const newItem = { ...item };
        if (newItem.id !== productId) {
          return newItem;
        }
      });
    });
  };

  return (
    <>
      <Header totalCartItems={totalCartItems} />
      <div className="container">
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty!
            <Link to="/">Shop</Link>
          </div>
        ) : (
          <div>
            <CartTable
              cartItems={cartItems}
              incrementAmountInCart={incrementAmountInCart}
              decrementAmountInCart={decrementAmountInCart}
              deleteProductFromCart={deleteProductFromCart}
            />
            <div>
              <p>Subtotal: {subTotal}</p>
              <button type="button">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

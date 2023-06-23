import Product from "./Product";

const ProductList = ({
  data,
  cartItems,
  setCartItems,
  totalCartItems,
  setTotalCartItems,
}) => {
  function onClickAddToCartBtn(
    productId,
    productImg,
    productTitle,
    productPrice
  ) {
    setTotalCartItems(totalCartItems + 1);

    const cartItemExist = cartItems.filter((item) => item.id === productId);

    if (cartItemExist.length) {
      setCartItems((prevState) => {
        return prevState.map((item) => {
          const newItem = { ...item };
          if (newItem.id === productId) {
            return { amount: newItem.amount++, ...newItem };
          }
          return newItem;
        });
      });
      return;
    }
    setCartItems((prevState) => {
      return [
        ...prevState,
        {
          id: productId,
          title: productTitle,
          img: productImg,
          price: productPrice,
          amount: 1,
        },
      ];
    });
  }

  return (
    <div className="container products-container">
      {data.length === 0 ? (
        <p>No products present!</p>
      ) : (
        data.map((product) => {
          return (
            <Product
              key={product.id}
              productPrice={product.price}
              productCurrency={product.currency}
              productImg={product.img}
              productTitle={product.title}
              productId={product.id}
              onClickAddToCartBtn={onClickAddToCartBtn}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductList;

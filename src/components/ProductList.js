import Product from "./Product";

const ProductList = ({ data, cartItems, setCartItems }) => {
  function onClickAddToCartBtn(productId, productImg, productTitle) {
    const item = {
      id: productId,
      title: productTitle,
      img: productImg,
      amount: 1,
    };

    if (cartItems.length) {
      const existingCartItem = cartItems.filter(
        (item) => item.id === productId
      );

      if (existingCartItem.length) {
        existingCartItem[0].amount++;
        const uniqueCartItems = cartItems.filter(
          (item) => item.id !== productId
        );
        const updatedCartItems = uniqueCartItems.concat(existingCartItem);
        setCartItems(updatedCartItems);
        return;
      }
      setCartItems([...cartItems, item]);
      return;
    }
    setCartItems([...cartItems, item]);
    return item;
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

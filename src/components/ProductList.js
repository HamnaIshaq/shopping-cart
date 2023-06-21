import Product from "./Product";

const ProductList = ({
  data,
  cartItems,
  setCartItems,
  totalCartItems,
  setTotalCartItems,
}) => {
  function onClickAddToCartBtn(productId, productImg, productTitle) {
    setTotalCartItems(totalCartItems + 1);

    const item = {
      id: productId,
      title: productTitle,
      img: productImg,
      amount: 1,
    };

    if (cartItems.length) {
      const productExistsInArr = cartItems.some(
        (item) => item.id === productId
      );

      if (productExistsInArr) {
        const tempArr = cartItems;

        tempArr.forEach((item) => {
          if (item.id === productId) {
            item.amount++;
          }
        });
        setCartItems(tempArr);
        return;
      }
      setCartItems([...cartItems, item]);
      return;
    }
    setCartItems([...cartItems, item]);
    return;
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

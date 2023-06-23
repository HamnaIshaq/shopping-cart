const Product = ({
  productPrice,
  productCurrency,
  productImg,
  productTitle,
  productId,
  onClickAddToCartBtn,
}) => {
  return (
    <div className="product-card-container">
      <div className="product-card-img">
        <img className="img" src={productImg} alt={productTitle} />
      </div>
      <div className="product-price">
        <p>
          Price: {productPrice} {productCurrency}
        </p>
      </div>
      <button
        className="add-to-cart-btn"
        type="button"
        data-productid={productId}
        onClick={() =>
          onClickAddToCartBtn(productId, productImg, productTitle, productPrice)
        }
      >
        Add to Card
      </button>
    </div>
  );
};

export default Product;

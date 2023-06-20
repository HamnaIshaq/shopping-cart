const Product = ({
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
      <button
        className="add-to-cart-btn"
        type="button"
        data-productid={productId}
        onClick={() => onClickAddToCartBtn(productId, productImg, productTitle)}
      >
        Add to Card
      </button>
    </div>
  );
};

export default Product;

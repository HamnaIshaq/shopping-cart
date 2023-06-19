const ProductCard = ({ productImg, productTitle }) => {
  return (
    <div className="product-card-container">
      <div className="product-card-img">
        <img className="img" src={productImg} alt={productTitle} />
      </div>
      <button className="add-to-cart-btn" type="button">
        Add to Card
      </button>
    </div>
  );
};

export default ProductCard;

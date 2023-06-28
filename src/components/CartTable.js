const CartTable = ({
  cartItems,
  incrementAmountInCart,
  decrementAmountInCart,
  deleteProductFromCart,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
        </tr>
      </thead>

      <tbody className="cartItemsBody">
        {cartItems.map((item) => {
          return (
            <tr className="cart-row" key={item.id}>
              <td>
                <div className="product-card-img" style={{ maxWidth: "100px" }}>
                  <img className="img" src={item.img} alt={item.title} />
                </div>
              </td>
              <td>
                {item.price * item.amount} {item.currency}
              </td>
              <td>
                <span className="cart-amount-btn-container">
                  {item.amount === 1 ? (
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => deleteProductFromCart(item.id)}
                    >
                      delete
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="amount-btn amount-increment-btn"
                      onClick={() => decrementAmountInCart(item.id)}
                    >
                      -
                    </button>
                  )}

                  <span>{item.amount}</span>
                  <button
                    type="button"
                    className="amount-btn amount-decrement-btn"
                    onClick={() => incrementAmountInCart(item.id)}
                  >
                    +
                  </button>
                </span>
              </td>
              <td>
                {item.price * item.amount} {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CartTable;

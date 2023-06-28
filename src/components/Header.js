import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart.png";

const Header = ({ totalCartItems }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="img-container">
          <Link to="/">
            <img className="img" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="img-container">
          <Link to="/cart" className="cart-link-container">
            <img className="img" src={Cart} alt="cart" />
            <p className="total-cart-items">{totalCartItems}</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

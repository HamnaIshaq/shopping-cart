import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="img-container">
          <Link to="/">
            <img className="img" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="img-container">
          <Link to="cart">
            <img className="img" src={Cart} alt="cart" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import Logo from "../assets/images/logo.png";
import Cart from "../assets/images/cart.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="img-container">
          <img className="img" src={Logo} alt="logo" />
        </div>
        <div className="img-container">
          <img className="img" src={Cart} alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;

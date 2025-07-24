import { Link } from "react-router-dom";
import Logo from "../images/header-logo.png";
import searchIcon from "../images/icons/searchIcon.png";
import shoppingCart from "../images/icons/shopping-cart.png";
import "./header.css";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const {user} = useAuth()
  const handleAuthentication = ()=>{
    auth.signOut();
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" text="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && '/login'}>
          <div className="header-option" onClick={handleAuthentication}>
            <div className="header-optionLineOne">Hello {user ? `${user.email}`:'Guest'}</div>
            <div className="header-optionLineTwo">{user ? 'Sing Out': 'Sing In'}</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders</div>
          </div>
        </Link>
        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} alt="icon-shopping" />
            <span className="header-optionLineTwo header-basketCount">5</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

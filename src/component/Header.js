import React from "react";
import { Link } from "react-router-dom";
import searchIcon from "../images/searchIcon.png";
import Logo from "../images/header-logo.png";
import shoppingCart from "../images/shopping-cart.png";
import { useAuth } from "../context/GlobalState";
import "./Header.css";

const Header = () => {
  const { user, basket } = useAuth();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "None" }}>
        <img className="header-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={searchIcon} alt="search-icon" />
      </div>
      <div className="header-nav">
        <Link to={"/login"} style={{ textDecoration: "None" }}>
          <div className="header-option">
            <span className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" style={{ textDecoration: "None" }}>
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header-option" style={{ textDecoration: "None" }}>
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={shoppingCart} />
            <span className="header-optionLineTwo header-basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { HeaderMain } from "./styles";
import logo from "../../assets/images/svg/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderMain>
      <div className="header__wrapper">
        <Link to="/" className="header__wrapper__logo">
          <i>
            <img src={logo} alt="logo" />
          </i>
          <p>Dream Home</p>
        </Link>
        <div className="header__wrapper__navbar">
          <NavLink className={(el)=>el.isActive ? "active" : ""} to="/">Home</NavLink>
          <NavLink className={(el)=>el.isActive ? "active" : ""} to="/about">About</NavLink>
          <div className="header__wrapper__navbar_projects-block">Other Projects</div>
          <button>Enquire Now</button>
        </div>
      </div>
    </HeaderMain>
  );
};

export default Header;

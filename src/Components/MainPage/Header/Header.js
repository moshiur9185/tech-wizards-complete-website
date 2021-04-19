import React from "react";
import "./Header.css";
import HeaderNavbar from "../../Shared/HeaderNavbar/HeaderNavbar";
import HeaderMain from "../HeaderMain/HeaderMain";

const Header = () => {
  return (
    <div className="header-container">
      <HeaderNavbar />
      <HeaderMain />
    </div>
  );
};

export default Header;

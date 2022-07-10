import React from "react";
import "./header.css";
import back from "../../assets/back.png";
import profileImage from "../../assets/profile.png";
import blueTick from "../../assets/blueTick2.png";
import search from "../../assets/search.png";
const Header = () => {
  return (
    <div className="Header">
      <img src={back} className="back" alt="" />

      <img src={profileImage} className="profileImage" alt="profileImage" />
      <h1 className="Headerheading"> Maitreyi Dutta</h1>
      <img src={blueTick} className="blueTick" alt="blueTick" />
      <img src={search} className="search" alt="" />
    </div>
  );
};

export default Header;

import React from "react";
import "./header.css";
import profileImage from "../../assets/profile.png";
import blueTick from "../../assets/blueTick.jpg";
const Header = () => {
  return (
    <div className="Header">
      <img
        src="https://cdn.onlinewebfonts.com/svg/img_430320.png"
        className="back"
        alt=""
      />

      <img src={profileImage} className="profileImage" alt="profileImage" />
      <h1 className="heading"> Maitreyi Dutta</h1>
      <img src={blueTick} className="blueTick" alt="blueTick" />
    </div>
  );
};

export default Header;

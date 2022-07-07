import React from "react";
import "./button.css";
const Button = ({ text }) => {
  return (
    <button className="shopBtn">
      <p className="btntext">
        <a href="https://home.wishlink.com/">{text}</a>
      </p>
    </button>
  );
};

export default Button;

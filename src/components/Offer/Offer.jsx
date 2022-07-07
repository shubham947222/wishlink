import React from "react";
import percentage from "../../assets/%inOffer.png";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="offer">
      <img src={percentage} alt="offer" className="offerImg" />
      Offer Available
    </div>
  );
};

export default Offer;

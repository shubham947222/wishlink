import React from "react";
import Img1 from "../../assets/summerODTD.png";
import Img2 from "../../assets/AfforableDresses.png";
import Img3 from "../../assets/summerODTD2.png";
import Img4 from "../../assets/summerODTD3.png";
import "./favourites.css";
const Favourites = ({ heading }) => {
  return (
    <div className="Favourites">
      <h3>{heading}</h3>
      <p className="para">Shop all my posts specially curated for you</p>
      <div className="gallery">
        <div className="column">
          <img src={Img1} alt="Img1" />
          <img src={Img2} alt="Img2" />
          <img src={Img3} alt="Img3" />
          <img src={Img4} alt="Img4" />
        </div>
        <div className="column2">
          <img src={Img2} alt="Img2" />
          <img src={Img1} alt="Img1" />
          <img src={Img1} alt="Img1" />
          <img src={Img4} alt="Img4" />
        </div>
      </div>
    </div>
  );
};

export default Favourites;

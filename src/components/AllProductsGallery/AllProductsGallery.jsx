import React from "react";
import Img1 from "../../assets/summerODTD.png";
import Img2 from "../../assets/AfforableDresses.png";
import Img3 from "../../assets/summerODTD2.png";
import Img4 from "../../assets/summerODTD3.png";
import "./allProductsGallery.css";
const AllProductsGallery = () => {
  return (
    <div className="gallery">
      <div className="column">
        <img src={Img1} className="galleryImage" alt="Img1" />
        <img src={Img2} className="galleryImage" alt="Img2" />
        <img src={Img3} className="galleryImage" alt="Img3" />
        <img src={Img4} className="galleryImage" alt="Img4" />
      </div>
      <div className="column">
        <img src={Img2} className="galleryImage" alt="Img2" />
        <img src={Img1} className="galleryImage" alt="Img1" />
        <img src={Img1} className="galleryImage" alt="Img1" />
        <img src={Img4} className="galleryImage" alt="Img4" />
      </div>
    </div>
  );
};

export default AllProductsGallery;

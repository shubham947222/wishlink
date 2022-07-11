import React, { useState } from "react";
import "./favourites.css";
import AllProductsGallery from "../AllProductsGallery/AllProductsGallery";
const Favourites = ({ heading }) => {
  const [seeAllProducts, setSeeAllProducts] = useState(false);
  return (
    <div className="Favourites">
      <h3>{heading}</h3>
      <p className="para">Shop all my posts specially curated for you</p>
      <AllProductsGallery />

      {seeAllProducts && <AllProductsGallery />}

      <div className="btnDiv">
        <button
          className="favouritBtn"
          onClick={() => setSeeAllProducts(!seeAllProducts)}
        >
          {seeAllProducts ? "See less Products" : "See all Products"}
        </button>
      </div>
    </div>
  );
};

export default Favourites;

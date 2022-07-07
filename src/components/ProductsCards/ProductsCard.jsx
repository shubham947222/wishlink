import React from "react";
import "./productsCard.css";
import Button from "../Button/Button";
import Products from "../../data/productData.json";
import Offer from "../Offer/Offer";
const ProductsCard = () => {
  return (
    <>
      {Products.map((product) => (
        <div key={product.id}>
          <div className="ProductsCard">
            {product.extraOffer && <Offer />}
            <img className="productImg" src={product.img} alt="productPhoto" />
            <div className="productDiscrp">
              <p className="brandName">{product.Brand}</p>
              <p className="productName">{product.ProductName}</p>
              <div className="rateAndDiscount">
                <p className="mrp">{product.price}</p>
                <p className="productDiscount">({product.discount})</p>
              </div>
              <p className="newprice">{product.actualPrice}</p>
              <div className="productButton">
                <Button text="Shop Now" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsCard;

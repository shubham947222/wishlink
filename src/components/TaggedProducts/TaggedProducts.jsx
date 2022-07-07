import React from "react";
import ProductsCards from "../ProductsCards/ProductsCard";
import "./taggedProducts.css";
const TaggedProducts = ({ heading }) => {
  return (
    <div className="TaggedProducts">
      <div>
        <h3>{heading}</h3>
      </div>
      <div className="products">
        <ProductsCards />
      </div>
    </div>
  );
};

export default TaggedProducts;

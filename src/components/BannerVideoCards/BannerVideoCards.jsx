import React from "react";
import "./bannervideoCards.css";
import BannerVideoCard from "../BannerVideoCard/BannerVideoCard";
const BannerVideoCards = () => {
  return (
    <div className="BannerVideoCards">
      <BannerVideoCard />
      <BannerVideoCard />
      <BannerVideoCard />
    </div>
  );
};

export default BannerVideoCards;

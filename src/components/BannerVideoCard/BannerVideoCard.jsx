import React from "react";
import "./bannerVideoCard.css";
import videoCardImage from "../../assets/videoCardImage.png";
import Button from "../Button/Button";
import Carousel from "react-grid-carousel";
function BannerVideoCard() {
  return (
    <Carousel cols={2} rows={1} gap={1} hideArrow autoplay={2000}>
      <Carousel.Item>
        <div className="BannerVideoCard">
          <div className="left">
            <img className="videoCardImage" src={videoCardImage} alt="" />
          </div>

          <div className="text">
            <h3 className="dressName">TRACE</h3>
            <p className="description"> Long red slit dress</p>
            <div className="shop-flex">
              <p className="price">₹1600</p>
              <p className="originalPrice">₹2000</p>
              <p className="discount">(20% OFF)</p>
            </div>
          </div>

          <div className="cardBtn">
            <Button text="Shop" />
          </div>
        </div>
      </Carousel.Item>
      {/*  */}
      <Carousel.Item>
        <div className="BannerVideoCard">
          <div className="left">
            <img className="videoCardImage" src={videoCardImage} alt="" />
          </div>

          <div className="text">
            <h3 className="dressName">TRACE</h3>
            <p className="description"> Long red slit dress</p>
            <div className="shop-flex">
              <p className="price">₹1600</p>
              <p className="originalPrice">₹2000</p>
              <p className="discount">(20% OFF)</p>
            </div>
          </div>

          <div className="cardBtn">
            <Button text="Shop" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="BannerVideoCard">
          <div className="left">
            <img className="videoCardImage" src={videoCardImage} alt="" />
          </div>

          <div className="text">
            <h3 className="dressName">TRACE</h3>
            <p className="description"> Long red slit dress</p>
            <div className="shop-flex">
              <p className="price">₹1600</p>
              <p className="originalPrice">₹2000</p>
              <p className="discount">(20% OFF)</p>
            </div>
          </div>

          <div className="cardBtn">
            <Button text="Shop" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="BannerVideoCard">
          <div className="left">
            <img className="videoCardImage" src={videoCardImage} alt="" />
          </div>

          <div className="text">
            <h3 className="dressName">TRACE</h3>
            <p className="description"> Long red slit dress</p>
            <div className="shop-flex">
              <p className="price">₹1600</p>
              <p className="originalPrice">₹2000</p>
              <p className="discount">(20% OFF)</p>
            </div>
          </div>

          <div className="cardBtn">
            <Button text="Shop" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerVideoCard;

import React, { useState, useRef } from "react";
import "./bannerVideo.css";
import videothumbnail from "../../assets/videothumbnail2.png";
import BannerVideoCards from "../BannerVideoCards/BannerVideoCards";
// import TaggedProducts from "../TaggedProducts/TaggedProducts";
const BannerVideo = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const playPauseSvgHandler = () => {
    setShowPlayButton(!showPlayButton);
    videoRef.current.play();
    setPlay(true);
  };
  const videoHandler = () => {
    // console.log(e);
    if (videoRef.current.fullscreenchange()) {
      console.log("full screen");
    }

    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <>
      <div className="VideoComp">
        <video
          src="https://d3g01po1nkka75.cloudfront.net/RashiFaballey130622.mp4"
          className="video"
          controls
          poster={videothumbnail}
          loop
          onClick={videoHandler}
          ref={videoRef}
          // no-repeat
        />
        <div className="playPauseSvg" onClick={playPauseSvgHandler}>
          {showPlayButton && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
              <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
            </svg>
          )}
        </div>
        <div>
          {play && <BannerVideoCards />}
          {!play && (
            <div className="closet">
              <h2 className="heading">Shop My Closet</h2>
            </div>
          )}
        </div>
      </div>
      {/* <TaggedProducts /> */}
    </>
  );
};

export default BannerVideo;

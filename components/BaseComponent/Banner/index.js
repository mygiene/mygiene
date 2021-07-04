import React from "react";
import BannerWrapper from "./style.banner";
const Banner = (props) => {
  return (
    <BannerWrapper>
      <div className="banner">
        <div className="banner__image">
          <img src={props.img} />
        </div>
        {/* <div className="overlay"></div> */}
        <div className="title">
          <h3>{props.title}</h3>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;

import React from "react";
import BannerWrapper from "./style.banner";
const Banner = (props) => {
  return (
    <BannerWrapper>
      <div className="banner">
        <div className="banner__image">
          <img src={props.Image} alt={props.title} />
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        {props.quote && (
          <div className="quote">
            <p>{props.quote}</p>
          </div>
        )}
      </div>
    </BannerWrapper>
  );
};

export default Banner;

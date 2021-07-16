import React from "react";
import PageNotFoundWrapper from "../styles/styles.404";
import Image from "next/image";
const Custom404 = () => {
  return (
    <PageNotFoundWrapper>
      <div className="main">
        <div className="left">
          <div className="left-image">
            <Image src="https://preview.ibb.co/d2fA19/404_error.png" />
          </div>
        </div>
        <div className="right">
          <div className="right-image">
            <Image src="https://image.ibb.co/hNh18p/404_worry.png" />
          </div>
          <div className="right-content">
            <span>
              It seems that you're lost in a perpetual black hole. Let us help
              guide you out and get you back home.
            </span>
            <a href="/">Back to Home</a>
          </div>
        </div>
      </div>
    </PageNotFoundWrapper>
  );
};

export default Custom404;

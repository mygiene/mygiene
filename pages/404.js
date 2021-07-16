import React from "react";
import PageNotFoundWrapper from "../styles/styles.404";
import Image from "next/image";
import Link from "next/link";
const Custom404 = () => {
  return (
    <PageNotFoundWrapper>
      <div className="main">
        <div className="left">
          <div className="left-image">
            <Image
              alt="404"
              src="https://preview.ibb.co/d2fA19/404_error.png"
            />
          </div>
        </div>
        <div className="right">
          <div className="right-image">
            <Image alt="icon" src="https://image.ibb.co/hNh18p/404_worry.png" />
          </div>
          <div className="right-content">
            <span>
              It seems that you're lost in a perpetual black hole. Let us help
              guide you out and get you back home.
            </span>
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </PageNotFoundWrapper>
  );
};

export default Custom404;

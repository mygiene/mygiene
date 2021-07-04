import React from "react";
import StyleWrapper from "../../styles/styles.home";

const HomePage = () => {
  return (
    <StyleWrapper>
      <div className="home">
        <div className="top-section">
          <div className="banner-section">
            <div className="background"></div>
            <div className="banner-image">
              <img src="/homeAssets/home-banner.jpg" />
            </div>
          </div>
          <div className="intro-section">
            <h1>Best grooming kit for men</h1>
            <p>
              Mygiene delivers a complete, one-stop toiletries package at the
              click of a button.
            </p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="kit-section"></div>
      </div>
    </StyleWrapper>
  );
};

export default HomePage;

import React from "react";
import StyleWrapper from "../../styles/styles.home";
import { FaIcon } from "../BaseComponent/FaIcon";
const kitList = [
  { id: 1, label: "Razor" },
  { id: 2, label: "Razor Case" },
  { id: 3, label: "Bamboo Toothbrush" },
  { id: 4, label: "Toothbrush Holder" },
  { id: 5, label: "Soap" },
  { id: 6, label: "Dental Floss" },
  { id: 7, label: "Shaving Soap" },
  { id: 8, label: "Toothpaste & Mouthwash" },
  { id: 9, label: "Dupont Tyvek Bag" },
  { id: 10, label: "Soap Case" },
];

const valuesList = [
  {
    id: 1,
    title: "ECO FRIENDLY",
    desc: "Our products are 80 per cent recyclable.",
    img: "/homeAssets/eco-friendly.png",
  },
  {
    id: 2,
    title: "SUSTAINABLE",
    desc: "At Mygiene, almost all of the products featured in our kit are recyclable and sustainably produced.",
    img: "/homeAssets/sustainable.png",
  },
  {
    id: 3,
    title: "HIGH QUALITY",
    desc: "Our fully stocked kit is a must-have, carefully designed by our passionate team.",
    img: "/homeAssets/high-quality.png",
  },
];

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
        <div className="kit-section">
          <div className="banner-outer">
            <img src="/homeAssets/home-kit.jpg" />
          </div>
          <div className="kit-content">
            <h1>ALL IN ONE GROOMING KIT</h1>
            <p className="kit-intro">
              Mygiene is out to revolutionise the way you pack with our
              all-inclusive toiletries bag for men. No more scrambling
              last-minute to pack the essentials. No more wasting money on
              travel minis that don’t get the job done. With Mygiene, you’ll
              look and feel your best.
            </p>
            <div className="kit-list">
              {kitList.map((m) => (
                <div key={m.id} className="kit-list-item">
                  <FaIcon className="fa-check-square-o" />
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
            {/* <button>Buy Now</button> */}
          </div>
        </div>
        <div className="values-section">
          <h1>Our core values</h1>
          <div className="values-list">
            {valuesList.map((m) => (
              <div className="values-list-item">
                <div className="banner-outer">
                  <img src={m.img} alt="" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default HomePage;

import React, { useRef } from "react";
import Slider from "react-slick";
import StyleWrapper from "../../styles/styles.home";
import { FaIcon } from "../BaseComponent/FaIcon";
import Carousel from "react-elastic-carousel";
import Link from "next/link";
import Image from "next/image";
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
    Image: "/homeAssets/eco-friendly.png",
  },
  {
    id: 2,
    title: "SUSTAINABLE",
    desc: "At Mygiene, almost all of the products featured in our kit are recyclable and sustainably produced.",
    Image: "/homeAssets/sustainable.png",
  },
  {
    id: 3,
    title: "HIGH QUALITY",
    desc: "Our fully stocked kit is a must-have, carefully designed by our passionate team.",
    Image: "/homeAssets/high-quality.png",
  },
];

const settings = {
  dots: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  showArrows: false,
  pauseOnHover: true,
  // fade: true,
};

const HomePage = () => {
  const carouselRef = useRef();
  return (
    <StyleWrapper>
      <div className="home">
        <div className="top-section">
          <div className="banner-section">
            <div className="background"></div>
            <div className="banner-image">
              <Image
                src="/homeAssets/home-banner.jpg"
                alt="mygiene - Men's Grooming Kit"
              />
            </div>
          </div>
          <div className="intro-section">
            <h1>Best grooming kit for men</h1>
            <p>
              Mygiene delivers a complete, one-stop toiletries package at the
              click of a button.
            </p>
            <button>
              <Link href="/kit">Buy Now</Link>
            </button>
          </div>
        </div>
        <div className="kit-section">
          <div className="banner-outer">
            <Image src="/homeAssets/home-kit.jpg" alt="kit" />
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
          <h1>Our Core Values</h1>
          <div className="values-list">
            {valuesList.map((m) => (
              <div className="values-list-item">
                <div className="banner-outer">
                  <Image src={m.Image} alt="kit-items" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonials-outer">
          <h2>
            <p>What they say</p>
            <hr />
          </h2>
          <div className="testimonials">
            <div className="testimonial-images">
              <div className="testimonial-Image">
                <Image src="/homeAssets/testimonial-1.png" alt="testimonia" />
              </div>
              <div className="testimonial-Image">
                <Image src="/homeAssets/testimonial-1.png" alt="testimonia" />
              </div>
            </div>
            <div className="testimonial-slider">
              <Carousel
                ref={(ref) => (carouselRef.current = ref)}
                {...settings}
              >
                {[1, 2, 3, 4].map((m) => (
                  <div className="slide-outer">
                    <div className="star-images">
                      {[1, 2, 3, 4].map(() => (
                        <>
                          <Image src="/homeAssets/star.png" alt="testimonia" />
                        </>
                      ))}
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Praesentium quis, suscipit rem veritatis molestias dolor
                      minus ratione maiores rerum. Voluptate, illo dignissimos
                      laboriosam praesentium delectus tempora assumenda
                      voluptatibus voluptatem ullam!
                    </div>
                    <div className="author">
                      <Image
                        src="/homeAssets/boy-avatar.svg"
                        alt="user-image"
                      />
                      John Doe
                    </div>
                  </div>
                ))}
              </Carousel>
              <div className="action-btns">
                <button onClick={() => carouselRef.current.slidePrev()}>
                  <Image src="/homeAssets/left-arrow.png" alt="left-arrow" />{" "}
                  Previous
                </button>
                <button onClick={() => carouselRef.current.slideNext()}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default HomePage;

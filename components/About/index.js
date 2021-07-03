import React from "react";
import AboutWrapper from "./styles.about";
const aboutData = [
  {
    heading: "We are on the mission",
    subHeading: "our mission",
    image: "/aboutAssets/about-1.jpg",
    content:
      "Mygiene is out to revolutionise the way you pack with our all-inclusive toiletries bag for men. No more scrambling last-minute to pack the essentials. No more wasting money on travel minis that don’t get the job done. With Mygiene, you’ll look and feel your best.",
  },
  {
    heading: "reusable & Eco-friendly",
    subHeading: "eco-friendly",
    image: "/aboutAssets/about-2.jpg",
    content:
      "It’s never been easier to substitute a few of your personal care items for more environmentally-friendly options. Here at Mygiene, almost all of the products featured in our kit are recyclable and sustainably produced.",
  },
  {
    heading: "social commitment",
    subHeading: "our promise",
    image: "/aboutAssets/about-3.jpg",
    content:
      "We are also committed to giving back to the global community. Ten per cent of our profit is allocated to purchasing teaching and school supplies for children in India. While this is a fantastic start, we have our sights set on more. .",
  },
];
const About = () => {
  return (
    <AboutWrapper>
      <about className="about">
        <div className="container">
          <div className="about__banner">
            <div className="about__banner-head">
              <h2>About Our Company</h2>

              <span>
                We solved X problem by providing Y solution with mygiene
                Australia
              </span>
              <div className="banner-buttons">
                <button>Buy Kit</button>
                <button>Read More</button>
              </div>
            </div>
            <div className="banner-image">
              <img src="/aboutAssets/banner.jpg" />
            </div>
          </div>
          <div className="about__content">
            <section>
              <div class="grid-flex">
                <div class="col col-text">
                  <div class="Aligner-item" id="content-1">
                    <ul>
                      <li>
                        <hr />
                      </li>
                      <li>OUR MISSION</li>
                    </ul>
                    <h2>WE ARE ON THE MISSION</h2>
                    <p>
                      Mygiene is out to revolutionise the way you pack with our
                      all-inclusive toiletries bag for men. No more scrambling
                      last-minute to pack the essentials. No more wasting money
                      on travel minis that don’t get the job done. With Mygiene,
                      you’ll look and feel your best.
                    </p>
                  </div>
                </div>
                <div
                  class="col col-image"
                  style={{
                    backgroundImage: 'url("/aboutAssets/about-1.jpg")',
                  }}
                ></div>
              </div>

              <div class="grid-flex">
                <div class="col col-text col-left">
                  <div class="Aligner-item" id="content-2">
                    <ul>
                      <li>
                        <hr />
                      </li>
                      <li>eco-friendly</li>
                    </ul>
                    <h2>reusable & Eco-friendly</h2>
                    <p>
                      It’s never been easier to substitute a few of your
                      personal care items for more environmentally-friendly
                      options. Here at Mygiene, almost all of the products
                      featured in our kit are recyclable and sustainably
                      produced.
                    </p>
                  </div>
                </div>
                <div
                  class="col col-image"
                  style={{
                    backgroundImage: 'url("/aboutAssets/about-2.jpg")',
                  }}
                >
                  &nbsp;
                </div>
              </div>

              <div class="grid-flex">
                <div class="col col-text">
                  <div class="Aligner-item" id="content-3">
                    <ul>
                      <li>
                        <hr />
                      </li>
                      <li>our promise</li>
                    </ul>
                    <h2>social commitment</h2>
                    <p>
                      We are also committed to giving back to the global
                      community. Ten per cent of our profit is allocated to
                      purchasing teaching and school supplies for children in
                      India. While this is a fantastic start, we have our sights
                      set on more. .
                    </p>
                  </div>
                </div>
                <div
                  class="col col-image"
                  style={{
                    backgroundImage: 'url("/aboutAssets/about-3.jpg")',
                  }}
                >
                  &nbsp;
                </div>
              </div>
            </section>
          </div>
        </div>
      </about>
    </AboutWrapper>
  );
};

export default About;

import styled from "styled-components";
import media from "../../util/media-queries";

export default styled.div`
  margin-top: 4.5rem;
  min-height: 60vh;

  .kit {
    max-width: 1450px;
    margin: auto;
    position: relative;
    margin-top: 8rem;
    margin-bottom: 2rem;

    .kit__top {
      display: flex;
      margin: auto;
      grid-gap: 5%;
      width: 90%;
      .kit__top-left {
        width: 100%;
        .kit__top-cover {
          background-color: #ffeeee;
          border-radius: 6px;
          img {
            background-position: center;
            object-fit: cover;
            width: 100%;
          }
        }
      }
      .kit__top-right {
        width: 90%;
        margin: auto;
        h3 {
          font-weight: 700;
          font-size: 1.65rem;
          margin-bottom: 1rem;
          margin-top: 1rem;
          line-height: 2rem;
        }
        .kit-price {
          font-weight: 650;
          font-size: 1.55rem;
          margin: 0;
        }
        .kit-quantity {
          font-weight: 650;
          font-size: 1.6rem;

          margin-top: 2rem;
          color: #8c8c8c;
          margin-bottom: 0.7rem;
        }
        .quantity-buttons {
          display: flex;
          grid-gap: 1rem;

          button {
            display: flex;
            width: 35px;
            height: 35px;
            justify-content: center;
            align-items: center;
            border: 2px solid #bdbdbd;
            .button-icon {
              font-weight: 700;
              font-size: 1rem;
              color: darkgray;
            }
          }
          span {
            width: 31px;
            height: 31px;
            border: 2px solid #bdbdbd;
            display: flex;
            justify-content: center;
            align-items: center;
            color: darkgray;
            font-weight: 700;
          }
        }
        .cart-button {
          margin-top: 2.5rem;
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 174px;
            height: 45px;
            background: #f2f2f2;
            border-radius: 8px;
            border: none;

            span {
              font-weight: 750;
              font-size: 1.05rem;
              text-transform: uppercase;
            }
          }
        }
        .values {
          display: flex;
          grid-gap: 1rem;
          margin-top: 2rem;
          .value-1,
          .value-2,
          .value-3 {
            text-align: center;
          }
          span {
            color: #d8d8d8;
            font-size: 0.9rem;
          }
          img {
            /* padding-left: 2rem; */
            padding-top: 0.5rem;
            width: 45px;
            height: 45px;
          }
        }
        .description {
          margin-top: 2rem;
          details {
            summary {
              margin: 1rem 0rem;
              list-style-type: none;
              text-transform: uppercase;
              font-size: 1.1rem;
              font-weight: 600;
            }
            summary::marker {
              display: none;
            }
            summary:after {
              content: "+";
              color: #fff;
              float: left;
              font-size: 1.8rem;
              font-weight: 400;
              margin: -7px 10px 0 0;
              padding: 0px 3px;
              color: black;
              text-align: center;
              width: 20px;
              border: 1px solid black;
            }
            p {
              width: 80%;
              line-height: 2rem;

              margin-left: 39px;
              color: gray;
            }
          }
          details[open] summary:after {
            content: "-";
            padding: 0px 3px;
            margin: -7px 10px 0 0;
          }
        }
        .shipping {
          margin-top: 2rem;
          a {
            display: flex;

            span {
              font-size: 1.2rem;
              font-weight: 600;
            }
            i {
              padding-left: 0.5rem;
            }
          }
        }
      }
    }
    .kit__tiles {
      margin-top: 2rem;
      width: 90%;
      margin: auto;

      .kit__tiles-title {
        width: 174px;
        height: 45px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          color: white;
          font-size: 1.05rem;
          text-transform: uppercase;
        }
      }
      .kit__tiles-items {
        width: 75%;
        margin: auto;
        margin-top: 2rem;
        display: grid;
        grid-gap: 3rem;
        justify-content: center;
        grid-template-columns: 25% 25% 25% 25%;
        .grid-item {
          background: #fff9f9;

          border-radius: 8px;
          padding: 20px;
          font-size: 30px;
          text-align: center;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .text-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: none;
            justify-content: center;
            align-items: center;
            margin: auto;
            border-radius: 8px;
            span {
              color: white;
              height: 100%;
              line-height: 1.3rem;

              /* padding: 5%; */

              font-size: 1rem;
            }
          }
          .item-title {
            top: 1rem;
            left: 1rem;
            position: absolute;
            font-size: 1.05rem;
            font-weight: 500;
            text-transform: capitalize;
            i {
              display: none;
            }
          }

          img {
            object-fit: cover;
            background-position: center;
          }
        }
        .grid-item:hover {
          .text-overlay {
            position: absolute;

            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.5s ease-in-out;

            margin: auto;
            span {
              color: white;
              height: 100%;
              line-height: 1.3rem;
              display: flex;
              width: 95%;
              margin: auto;

              justify-content: center;
              align-items: center;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .kit {
      .kit__top {
        display: block !important;
        .kit__top-right {
          margin-top: 3rem !important;
          h3 {
            font-size: 2rem !important;
          }
          .kit-price {
            font-weight: 600 !important;
            font-size: 1.8rem !important;
          }
          .description {
            details {
              p {
                width: 90% !important;
                font-size: 1.25rem !important;
              }
            }
          }
          .cart-button {
            button {
              span {
                font-size: 1.3rem !important;
              }
            }
          }
        }
      }
      .kit__tiles {
        margin: auto;
        width: 90%;
        margin-top: 2rem !important;
        .kit__tiles-items {
          width: 90% !important;
          grid-template-columns: 50% 50%;
          flex-wrap: wrap;

          .grid-item {
            width: 100% !important;
            box-sizing: border-box;
            .item-title {
              font-size: 1.5rem;
              display: flex;
              right: 0;
              width: 100%;
              i {
                transform: rotate(45deg);
                position: absolute;
                right: 25px;
                top: 0px;
                display: block;
                font-size: 2rem;
              }
            }
          }
          .grid-item:hover {
            .text-overlay {
              display: none !important;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    .kit .kit__tiles .kit__tiles-items {
      width: 88% !important;
      grid-gap: 2rem !important;

      .grid-item {
        height: 180px !important;

        .text-overlay {
          span {
            line-height: 1.3rem !important;
            font-size: 1rem !important;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    .kit {
      .kit__tiles {
        .kit__tiles-items {
          grid-template-columns: 33.33% 33.33% 33.33%;
          grid-gap: 2rem !important;
          .grid-item {
            span {
              top: 0.8rem !important;
              left: 0.5rem !important;
              font-size: 1.2rem !important;
              font-weight: 600 !important;
            }
            i {
              transform: rotate(135deg) !important;
              position: absolute;
              right: 15px !important;
              top: 150px !important;

              font-size: 1.8rem !important;
              color: black !important;
            }
          }
        }
      }
    }
  }
  ${media.max.mobileXL} {
    .kit {
      .kit__tiles {
        .kit__tiles-items {
          grid-template-columns: 1fr;
          .grid-item {
            height: 225px !important;
            span {
              top: 1rem !important;
              left: 0.5rem !important;
              font-size: 1.8rem !important;
              font-weight: 600 !important;
            }
            i {
              transform: rotate(135deg) !important;
              position: absolute;
              right: 15px !important;
              top: 170px !important;

              font-size: 2rem !important;
              color: black !important;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 639px) and (min-width: 426px) {
    .kit {
      .kit__tiles {
        .kit__tiles-items {
          grid-template-columns: 50% 50%;
          .grid-item {
            height: 225px !important;
            span {
              top: 1rem !important;
              left: 0.5rem !important;
              font-size: 1.4rem !important;
              font-weight: 600 !important;
            }
            i {
              transform: rotate(135deg) !important;
              position: absolute;
              right: 15px !important;
              top: 170px !important;

              font-size: 2rem !important;
              color: black !important;
            }
          }
        }
      }
    }
  }
`;

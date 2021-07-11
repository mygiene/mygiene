import styled from "styled-components";

export default styled.div`
  margin-top: 4.5rem;

  .kit {
    margin: auto;
    width: 90%;
    /* position: relative; */
    margin-top: 8rem;
    margin-bottom: 2rem;

    .kit__top {
      display: flex;
      grid-gap: 5%;

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
            font-size: 1.3rem;
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
            span {
              color: white;
              height: 100%;
              line-height: 1.45rem;
              left: 0;
              top: 0;
              width: 90%;
              /* padding: 5%; */
              margin: 7%;
            }
          }
          span {
            top: 1rem;
            left: 1rem;
            position: absolute;
            font-size: 1.05rem;
            font-weight: 500;
            text-transform: capitalize;
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
              line-height: 1.45rem;
              left: 0;
              top: 0;
              width: 90%;

              /* padding: 5%; */
              margin: 7%;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .kit {
      .kit__top {
        display: block !important;
        .kit__top-right {
          width: 100% !important;
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
                width: 100% !important;
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
        display: grid;
        .kit__tiles-items {
          width: 90%;
          grid-template-columns: 50% 50%;
          .grid-item {
            span {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
  }
`;

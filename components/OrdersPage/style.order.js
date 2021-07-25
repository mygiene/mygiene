import styled from "styled-components";
import variables from "../../styles/variables";
export default styled.div`
  .container {
    display: flex;
    grid-gap: 5%;
    width: 95%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    flex-direction: column;

    margin: auto;
    margin-top: 5rem;
    .top-section {
      div {
        padding-left: 2rem;
        h3 {
          font-size: 1.7rem;
          margin-bottom: 0.7rem;
        }
        span {
          font-size: 1.4rem;
        }
      }
      hr {
        color: darkslategray;
      }
    }
    .orders-view {
      display: flex;
      grid-gap: 1.5rem;
      margin-bottom: 3rem;
      .right-side {
        margin: 1.5rem 0rem 3rem 0rem;
        .order-item {
          display: flex;
          margin-top: 1rem;
          flex-direction: column;
          justify-content: flex-start;
          .order-status {
            display: block;
            grid-gap: 41%;
            margin-bottom: 0.3rem;
            grid-gap: 0.4rem;
            .first-step {
              display: flex;
              float: left;
              flex-direction: column;
              align-items: flex-start;
              span:nth-child(1) {
                color: #004525;
                font-size: 1.1rem;
                font-weight: 700;
              }
              span:nth-child(2) {
                color: #004525;
                font-size: 1rem;
                font-weight: 400;
              }
            }
            .current-step {
              float: right;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              span:nth-child(1) {
                color: #004525;
                font-size: 1.1rem;
                font-weight: 700;
              }
              span:nth-child(2) {
                color: #004525;
                font-size: 1rem;
                font-weight: 400;
              }
            }
          }
          .order__card {
            width: 500px;
            height: 200px;
            background-color: #ebebeb;
            align-items: center;
            display: flex;
            grid-gap: 1rem;
            position: relative;
            border-radius: 8px;
            .order__card-image {
              width: 200px;
              height: 160px;
              background-color: ${variables.primary_color};
              margin-left: 1rem;

              img {
                background-position: center;
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
            }
            .order__card-content {
              display: flex;
              flex-direction: column;
              grid-gap: 2rem;
              .content-outer {
                display: flex;
                flex-direction: column;
                h3 {
                  text-transform: uppercase;
                  font-size: 1rem;
                  margin-bottom: 0;
                }
                .price {
                  margin-top: 0.6rem;
                  font-weight: 900;
                }
                .quantity-order {
                  display: flex;
                  margin-top: 1.5rem;
                  grid-gap: 0.7rem;
                  .order-outer {
                    display: flex;
                    align-items: baseline;
                    span {
                      font-size: 0.75rem;
                      color: darkslategray;
                      font-weight: 700;
                      padding-left: 0.25rem;
                    }
                  }
                }
              }
              div:nth-child(2) {
                button {
                  color: red;
                  font-weight: 600;
                  padding-left: 0;
                  font-size: 0.8rem;
                  border: none;
                  text-decoration: underline;
                }
              }
            }
            .download-icon {
              position: absolute;
              right: 10px;
              bottom: 10px;
              border: none;
              i {
                font-size: 2.25rem;
                color: darkslategray;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .top-section {
      div {
        padding-left: 1.5rem !important;
      }
    }
    .orders-view {
      flex-direction: column;
      margin-top: 1.5rem !important;

      .right-side {
        .order-item {
          width: 90% !important;
          margin: auto !important;
          margin: auto !;
          .order__card {
            width: 100% !important;
            height: 300px !important;
            flex-direction: column !important;
            grid-gap: 0.5rem !important;
            .order__card-image {
              margin-left: 0;
              margin-top: 1.2rem;
            }
            .order__card-content {
              display: flex;
              flex-direction: column;
              grid-gap: 2rem;
              width: 90% !important;
              align-items: center !important;

              .content-outer {
                display: flex;

                .quantity-order {
                  display: flex;
                  margin-top: 1.5rem;
                  grid-gap: 0.7rem;
                  font-size: 1.2rem !important;
                  .order-outer {
                    display: flex;
                    align-items: baseline;
                    font-size: 1.2rem !important;
                    span {
                      font-size: 1rem !important;
                      color: darkslategray;
                      font-weight: 700;
                      padding-left: 0.25rem;
                    }
                  }
                }
              }
              div:nth-child(2) {
                button {
                  color: red;
                  font-weight: 600;
                  padding-left: 0;
                  font-size: 1rem !important;
                  border: none;
                  text-decoration: underline;
                }
              }
            }
          }
          .order-status {
            grid-gap: 28% !important;
            .first-step,
            .current-step {
              span:nth-child(1) {
                font-size: 1rem !important;
              }
              span:nth-child(2) {
                font-size: 0.9rem !important;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) and (min-width: 426px) {
    .orders-view {
      flex-direction: column;
      margin-top: 1.5rem !important;

      .right-side {
        .order-item {
          width: 90% !important;
          margin: auto !important;
          margin: auto !important;
          max-width: 500px !important;
          .order__card {
            width: 100% !important;
            height: 200px !important;

            .order__card-image {
              margin-left: 0;
              margin-top: 1.2rem;
            }
            .order__card-content {
              grid-gap: 1rem !important;
              div:nth-child(1) {
                h3 {
                  text-transform: uppercase;
                  font-size: 1.2rem !important;
                  //margin-bottom: 1rem !important;
                }
                .price {
                  margin-top: 0.6rem;
                  font-weight: 900;
                  font-size: 1.1rem !important;
                }
                .quantity-order {
                  display: flex;
                  margin-top: 1.5rem;
                  grid-gap: 0.7rem;
                  font-size: 1.2rem !important;
                  flex-direction: column !important;
                  .order-outer {
                    display: flex;
                    align-items: baseline;
                    span {
                      font-size: 0.95rem !important;
                      color: darkslategray;
                      font-weight: 700;
                      padding-left: 0.25rem;
                    }
                  }
                }
              }
              div:nth-child(2) {
                margin-top: 1.5rem !important;
                button {
                  color: red;
                  font-weight: 600;
                  padding-left: 0;
                  font-size: 0.8rem;
                  border: none;
                  text-decoration: underline;
                }
              }
            }
          }
          .order-status {
            grid-gap: 28% !important;
            .first-step,
            .current-step {
              span:nth-child(1) {
                font-size: 1rem !important;
              }
              span:nth-child(2) {
                font-size: 0.9rem !important;
              }
            }
          }
        }
      }
    }
  }
`;

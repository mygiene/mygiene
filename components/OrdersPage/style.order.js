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
      .right-side {
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
                font-size: 0.8rem;
                font-weight: 700;
              }
              span:nth-child(2) {
                color: #004525;
                font-size: 0.8rem;
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
                font-size: 0.8rem;
                font-weight: 700;
              }
              span:nth-child(2) {
                color: #004525;
                font-size: 0.8rem;
                font-weight: 400;
              }
            }
          }
          .order__card {
            width: 450px;
            height: 165px;
            background-color: #ebebeb;
            align-items: center;
            display: flex;
            grid-gap: 1.5rem;
            position: relative;
            border-radius: 8px;
            .order__card-image {
              width: 144px;
              height: 124px;
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
              h3 {
                text-transform: uppercase;
                font-size: 1rem;
                margin-bottom: 0;
              }
              span:nth-child(1) {
                margin-top: 0.6rem;
                font-weight: 900;
              }
              span:nth-child(2) {
                margin-top: 1.25rem;
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
            height: 240px !important;
            flex-direction: column !important;
            grid-gap: 0.5rem !important;
            .order__card-image {
              margin-left: 0;
              margin-top: 1.2rem;
            }
            .order__card-content {
              width: 90% !important;
              align-items: center !important;
              h3 {
                margin-top: 0.8rem !important;
                font-size: 1.35rem !important;
                font-weight: 800 !important;
                margin-bottom: 0rem !important;
              }
              span:nth-child(1) {
                font-size: 1.5rem !important;
                font-weight: 800 !important;
                margin-top: 0.8rem !important;
              }
              span:nth-child(2) {
                font-size: 1.3rem !important;
                color: darkslategray !important;
                font-weight: 500 !important;
                margin-top: 1.15rem !important;
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
          max-width: 450px !important;
          .order__card {
            width: 100% !important;
            height: 165px !important;

            grid-gap: 1.5rem !important;
            .order__card-image {
              margin-left: 0;
              margin-top: 1.2rem;
            }
            .order__card-content {
              width: 90% !important;
              align-items: center !important;
              h3 {
                margin-top: 0.8rem !important;
                font-size: 1.35rem !important;
                font-weight: 800 !important;
                margin-bottom: 0rem !important;
              }
              span:nth-child(1) {
                font-size: 1.5rem !important;
                font-weight: 800 !important;
                margin-top: 0.8rem !important;
              }
              span:nth-child(2) {
                font-size: 1.3rem !important;
                color: darkslategray !important;
                font-weight: 500 !important;
                margin-top: 1.15rem !important;
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

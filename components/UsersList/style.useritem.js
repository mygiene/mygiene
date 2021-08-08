import styled from "styled-components";
import variables from "../../styles/variables";
export default styled.div`
  .user-item {
    margin-top: 7rem;
    padding: 0;
    width: 100%;
    margin-bottom: 3rem;

    .heading {
      display: flex;
      width: 90%;
      margin: auto;
      justify-content: center;
      h2 {
        font-size: 1.8rem;
        font-weight: 700;
        font-style: italic;
      }
    }
    .content {
      display: flex;
      width: 90%;
      min-height: 300px;
      margin: auto;
      justify-content: space-between;
      .profile_details {
        display: flex;
        flex-direction: column;
        grid-gap: 1.5rem;
        width: 35%;
        margin-top: 1.5rem;
        .profile_details-name,
        .profile_details-email,
        .profile_details-contact,
        .profile_details-address {
          display: flex;
          justify-content: space-between;
        }

        .profile_details-address {
          div {
            display: flex;
            flex-direction: column;
            grid-gap: 0.8rem;

            div {
              display: flex;
              grid-gap: 1rem;
              flex-direction: row;
            }
          }
        }
      }
    }
    hr {
      display: none;
    }
    .order-details {
      a {
        color: black;
      }
      .order-item {
        display: flex;
        margin-top: 1rem;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 3rem;
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
          width: 400px;
          height: max-content;
          background-color: #ebebeb;
          align-items: center;
          display: flex;
          grid-gap: 1rem;
          position: relative;
          flex-direction: column;
          border-radius: 8px;
          .order__card-image {
            width: 35%;
            margin-top: 1.1rem;
            background-color: ${variables.primary_color};

            border-radius: 50%;

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
            width: 90%;
            text-align: center;
            margin-bottom: 2rem;

            .content-outer {
              display: flex;
              flex-direction: column;
              h3 {
                text-transform: uppercase;
                font-size: 1rem;
                margin-bottom: 0;
              }
              .price {
                margin-top: 1.3rem;
                font-weight: 900;
                display: flex;
                justify-content: space-between;
              }
              .quantity-order {
                display: flex;
                margin-top: 1.5rem;
                grid-gap: 0.7rem;
                justify-content: space-between;

                .order-outer {
                  display: flex;
                  align-items: baseline;
                  span {
                    font-size: 1.05rem;
                    color: darkslategray;
                    font-weight: 700;
                    padding-left: 0.25rem;
                  }
                }
              }
              .order-status {
                text-align: left;
                margin-top: 0.5rem;
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
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .user-item {
      .heading {
        h2 {
          font-size: 1.35rem;
          line-height: 1.8rem;
        }
      }
      .content {
        flex-direction: column;
        .profile_details {
          width: 100%;
        }

        .order-details {
          margin-top: 2rem;
          a {
            .order-item {
              .order__card {
                width: 100%;
                .order__card-image {
                  width: 40%;
                }
              }
            }
          }
        }
      }
    }
  }
`;

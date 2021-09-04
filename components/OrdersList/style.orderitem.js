import styled from "styled-components";
export default styled.div`
  .order-item {
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
    .delivery-dropdown {
      display: flex;
      width: 90%;
      margin: auto;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        label {
          font-size: 1.5rem;
        }
        select {
          width: 40%;
          padding: 0.5rem;
          border-radius: 7px;
          border: none;
        }
      }
      button {
        display: flex;
        background-color: #d5fafc;
        border: none;
        /* width: 100px; */
        align-items: center;
        /* width: 5rem; */
        min-width: 5rem;
        height: 3rem;
        justify-content: center;
        align-items: center;
        border-radius: 10px;

        span {
          font-size: 1.3rem;
        }
        i {
          color: black;
          font-size: 1.3rem;
          margin-left: 1rem;
        }
      }
      button:hover {
        background-color: black;
        span {
          color: white;
        }
        i {
          color: white;
        }
      }
    }

    .details-1 {
      width: 90%;
      margin: auto;
      /* background-color: aqua; */
      display: flex;
      justify-content: space-between;
      margin: 2rem auto;
      .order-details {
        width: 45%;
        height: max-content;
        background-color: lightpink;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        .order-head {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items: center;
          i {
            font-size: 2.5rem;
          }
          span {
            font-size: 1.5rem;
          }
        }
        .order-info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            display: flex;
            width: 80%;
            margin: auto;
            justify-content: space-between;
            margin-top: 1rem;
            margin-bottom: 1.6rem;
          }
        }
      }
      .customer-details {
        width: 45%;
        height: max-content;
        background-color: red;

        background-color: lightgray;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        .customer-head {
          display: flex;
          margin-top: 1rem;
          gap: 1rem;
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items: center;
          i {
            font-size: 2.5rem;
          }
          span {
            font-size: 1.5rem;
          }
        }
        .customer-info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            display: flex;
            width: 80%;
            margin: auto;
            justify-content: space-between;
            margin-top: 1rem;
            margin-bottom: 1.6rem;
          }
        }
      }
    }
    .details-bottom {
      width: 90%;
      margin: auto;
      /* background-color: aqua; */
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      .shipping-details {
        width: 45%;
        height: max-content;
        display: flex;
        background-color: lightgray;
        box-shadow: rgb(0 0 0 / 2%) 0px 1px 3px 0px,
          rgb(27 31 35 / 15%) 0px 0px 0px 1px;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .shipping-head {
          display: flex;
          margin-top: 1rem;
          gap: 1rem;
          width: 100%;
          text-align: center;
          justify-content: center;
          align-items: center;
          i {
            font-size: 2.5rem;
          }
          span {
            font-size: 1.5rem;
          }
        }
        .shipping-info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            display: flex;
            width: 80%;
            margin: auto;
            margin-top: 1rem;
            margin-bottom: 1.6rem;
            justify-content: space-between;
            a {
              color: black;
              i {
                margin-left: 0.8rem;
                color: blue;
              }
            }
          }
          p,
          span {
            text-transform: capitalize;
          }
        }
      }

      .payment-details {
        width: 45%;
        height: max-content;
        background-color: lightpink;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        .payment-head {
          display: flex;
          gap: 1rem;
          width: 100%;
          margin-top: 1rem;
          text-align: center;
          justify-content: center;
          align-items: center;
          i {
            font-size: 2.5rem;
          }
          span {
            font-size: 1.5rem;
          }
        }
        .payment-info {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            display: flex;
            width: 80%;
            margin: auto;
            justify-content: space-between;
            margin-top: 1rem;
            margin-bottom: 1.6rem;
            a {
              color: black;
              i {
                margin-left: 0.8rem;
                color: blue;
              }
            }
          }
          p,
          span {
            text-transform: capitalize;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1023px) and (min-width: 769px) {
    .order-item {
      .details-1 {
        .order-details,
        .customer-details {
          width: 48%;
        }
      }
      .details-bottom {
        .shipping-details,
        .payment-details {
          width: 48%;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .order-item {
      .heading {
        h2 {
          font-size: 1.5rem;
        }
      }
      .details-1 {
        flex-direction: column;
        gap: 2rem;
        .order-details,
        .customer-details {
          width: 100%;
        }
      }
      .details-bottom {
        flex-direction: column;
        gap: 2rem;
        .shipping-details,
        .payment-details {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .order-item {
      .heading {
        h2 {
          font-size: 1.5rem;
        }
      }
      .details-1 {
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        .order-details,
        .customer-details {
          width: 100%;
        }
      }
      .details-bottom {
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        .shipping-details,
        .payment-details {
          width: 100%;
        }
      }
    }
  }
`;

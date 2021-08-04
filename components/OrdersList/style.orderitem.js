import styled from "styled-components";
export default styled.div`
  .order-item {
    margin-top: 6rem;
    padding: 0;
    width: 100%;
    margin-bottom: 3rem;

    .heading {
      display: flex;
      width: 100%;
      justify-content: center;
      h2 {
        font-size: 1.8rem;
        font-weight: 700;
        font-style: italic;
      }
    }
    .details-1 {
      width: 90%;
      margin: auto;
      /* background-color: aqua; */
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
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
`;

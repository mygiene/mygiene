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

        background-color: lightgray;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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
          }
        }
      }
      .customer-details {
        width: 45%;
        height: 300px;
        background-color: red;

        background-color: lightgray;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
          rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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
          }
        }
      }
    }
    .details-bottom {
      background-color: lightpink;
      width: 90%;
      margin: auto;
      display: flex;
      height: 300px;
      .payment-details {
        display: flex;
        width: 80%;
        margin: auto;
        justify-content: space-between;
        flex-direction: column;

        p {
          display: flex;
          justify-content: space-between;
        }
        p,
        span {
          text-transform: capitalize;
        }
      }
    }
  }
`;

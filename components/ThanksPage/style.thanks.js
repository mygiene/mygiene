import styled from "styled-components";
export default styled.div`
  margin-top: 3rem;

  .top__section {
    .logo {
      display: flex;
      justify-content: center;

      width: 100%;

      grid-gap: 1rem;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -1rem;
        i {
          margin-right: 1rem;
        }
        h2 {
          font-family: "quam_black";
          font-size: 2.5rem;
          color: black;
          margin-bottom: 0;
          margin-top: 0;
        }
      }
    }
    .thankyou__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 70%;
      margin: auto;
      h1 {
        font-size: 3.5rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        margin-bottom: 0.2rem;
      }
      span {
        text-transform: capitalize;
        font-size: 2rem;
      }
    }
  }
  .container {
    background-color: #f4f0ec;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .order-details {
      width: 90%;
      margin: 2rem auto;
      span {
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: capitalize;
      }
      p {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.7rem;
      }
    }
    .order-table {
      width: 75%;
      margin: auto;
      padding: 1rem;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      border-radius: 8px;
      margin-bottom: 2rem;
      border: none;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  .bottom-section {
    width: 80%;
    margin: auto;
    display: flex;
    grid-gap: 5%;
    margin: 2rem auto;
    justify-content: space-around;
    .customer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .customer-image {
        width: 8rem;

        img {
          object-fit: cover;
          width: 100%;
          background-position: center;
        }
      }
      span {
        margin-top: 1rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
        a {
          color: #055f5b;
        }
      }
    }
    .package {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      .package-image {
        width: 10.5rem;
        img {
          object-fit: cover;
          width: 100%;
          background-position: center;
        }
      }
      span {
        margin-top: 1rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
      }
    }
  }
  @media only screen and (max-width: 576px) and (min-width: 426px) {
    .top__section .thankyou__text h1 {
      font-size: 3.05rem !important;

      letter-spacing: 0.25rem !important;
    }
    .top__section .thankyou__text span {
      text-transform: capitalize;
      font-size: 1.7rem !important;
    }
  }
  @media only screen and (max-width: 425px) {
    .top__section .thankyou__text h1 {
      font-size: 2.75rem !important;

      letter-spacing: 0.3rem !important;
    }
    .top__section .thankyou__text span {
      font-size: 1.65rem !important;
    }
    .order-table {
      width: 85% !important;
    }
    .bottom-section {
      width: 90% !important;
      flex-direction: column !important;
    }
  }
`;

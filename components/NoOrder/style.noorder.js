import styled from "styled-components";
export default styled.div`
  .noorder {
    width: 60%;
    min-width: 500px;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    .noorder-image {
      width: 60%;
      img {
        width: 100%;
        object-fit: cover;
        background-position: center;
      }
    }
    .tagline {
      width: 90%;
      display: flex;
      justify-content: center;
      span {
        font-size: 1.7rem;
        font-weight: 400;
      }
    }
    .kit-button {
      margin-top: 2.5rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 45px;
        background: #f2f2f2;
        border-radius: 8px;
        border: none;
        color: black;

        span {
          font-weight: 750;
          font-size: 1.05rem;
          text-transform: uppercase;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .noorder {
      width: 90%;
      min-width: 0px;

      margin: auto;

      .tagline {
        width: 95%;
        span {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

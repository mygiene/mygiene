import styled from "styled-components";
import media from "../util/media-queries";
import variables from "./variables";
export default styled.div`
  .main {
    height: 100vh;
    display: flex;
    width: 100%;
    grid-gap: 0%;
    margin-top: 4.5rem;

    .left {
      background-color: ${variables.primary_color};
      height: 100vh;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .left-image {
        width: 98%;
        margin: auto;
        justify-content: center;
        align-items: center;
        display: flex;
        img {
          background-position: center;
          object-fit: cover;
          margin: 2rem;
          width: 29rem;
        }
      }
    }
    .right {
      background-color: #4d4d4d;
      height: 100vh;
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .right-image {
        width: 98%;

        justify-content: center;
        align-items: center;
        display: flex;
        img {
          background-position: center;
          object-fit: cover;
          margin: 2rem;
        }
      }
      .right-content {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-size: 1.5rem;
          line-height: 2rem;
          color: white;
          text-align: center;
        }
        a {
          margin: 1rem 0.5rem 1rem 0.5rem;
          background: #e0e0e0;
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 80px;
          width: 150px;
          height: 45px;
          display: flex;
          justify-content: center;
          text-align: center;
          align-items: center;
          color: black;
          font-size: 1.2rem;
          font-weight: 700;
          /* a {
              color: #000000;
            } */
        }
      }
    }
  }
  ${media.max.tablet} {
    .main {
      flex-direction: column !important;
      .left {
        height: calc(40vh - 2.25rem) !important;
        width: 100% !important;
        /* .left-image {
          img {
            width: 15rem;
          }
        } */
      }
      .right {
        width: 100% !important;
        height: calc(60vh - 2.25rem) !important;
        .right-image {
          img {
            width: 11rem !important;
          }
        }

        span {
          font-size: 2.3rem !important;
        }
      }
    }
  }
`;

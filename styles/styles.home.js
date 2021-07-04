import styled from "styled-components";
import media from "../util/media-queries";
import variables from "./variables";

export default styled.div`
  margin-top: 4.5rem;
  /* text-align: center; */
  /* padding: 24vh 0; */
  .home {
    margin: auto;
    position: relative;
    max-width: 1450px;
    .top-section {
      display: flex;
      align-items: center;
      .banner-section {
        flex-grow: 1;
        order: 2;
        width: 50%;
        position: relative;
        .background {
          position: absolute;
          right: 0;
          width: 80%;
          height: 700px;
          background-color: ${variables.primary_color};
          &::after {
            content: "";
          }
        }
        .banner-image {
          position: relative;
          height: 700px;
          display: flex;
          align-items: center;
          /* padding-left: 2rem; */
          max-width: 80%;
          overflow: hidden;
          img {
            border-radius: 5px;
            z-index: 2;
            height: 600px;
            background-position: center center;
          }
        }
      }
      .intro-section {
        padding: 4rem;
        width: 50%;
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 1.5rem;
          line-height: 130%;
        }
        button {
          border: none;
          background-color: black;
          width: 150px;
          height: 50px;
          color: whitesmoke;
          margin-top: 3rem;
          border-radius: 5px;
        }
      }
    }
    .kit-section {
      display: flex;
      align-items: center;
      width: 90%;
      margin: auto;
      margin-top: 5rem;
      gap: 3rem;
      .banner-outer {
        width: 50%;

        img {
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
      }
      .kit-content {
        width: 50%;
        h1 {
          color: #055f5b;
          font-size: 2.5rem;
          font-weight: 600;
          margin-top: 0;
        }
        p {
          font-size: 1.2rem;

          line-height: 130%;
          padding: 1rem 1.5rem;
        }
        .kit-list {
          display: grid;
          padding: 0 0.5rem;
          gap: 1rem;
          grid-template-columns: 1fr 1fr;
          .kit-list-item {
            display: flex;
            align-items: center;
            gap: 10px;
            i {
            }
          }
        }
        button {
          width: 150px;
          height: 50px;
          background-color: #ebebeb;
          color: black;
          border: none;
          border-radius: 5px;
          margin-top: 2rem;
        }
      }
    }
    .values-section {
      margin: auto;
      margin-top: 5rem;
      width: 90%;
      overflow: hidden;
      h1 {
        text-align: center;
        margin-bottom: 4rem;
        font-size: 3rem;
        text-transform: uppercase;
      }
      .values-list {
        /* max-width: 100%; */
        display: flex;
        gap: 2rem;
        /* grid-template-columns: auto auto auto; */
        .values-list-item {
          width: 33%;
          max-width: 400px;
          overflow: hidden;
          padding: 1rem;
          text-align: center;
          .banner-outer {
            img {
            }
          }
          h3 {
            padding-top: 1rem;
            padding-bottom: 0.5rem;
            font-size: 1.5rem;
          }
          p {
            line-height: 120%;
          }
        }
      }
    }
  }
  ${media.max.desktopM} {
    .home {
      .top-section {
        .banner-section {
          .background {
            height: 600px;
          }
          .banner-image {
            height: 600px;
            img {
              height: 500px;
            }
          }
        }
        .intro-section {
          padding: 4rem 2rem 4rem 2rem;

          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.2rem;
          }
          button {
          }
        }
      }
      .kit-section {
        .banner-outer {
          max-width: 50%;
          overflow: hidden;
          img {
          }
        }
        .kit-content {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
            padding: 1rem 0rem;
          }
          .kit-list {
            .kit-list-item {
              i {
              }
            }
          }
        }
      }
      .values-section {
        .values-list {
          .values-list-item {
            .banner-outer {
              img {
              }
            }
            h3 {
            }
            p {
            }
          }
        }
      }
    }
  }
  ${media.max.desktopS} {
    .home {
      .top-section {
        .banner-section {
          width: 60%;

          .background {
            height: 550px;
          }
          .banner-image {
            height: 550px;
            max-width: 85%;
            img {
              height: 450px;
            }
          }
        }
        .intro-section {
          width: 40%;
          h1 {
          }
          p {
          }
          button {
          }
        }
      }
      .kit-section {
        .banner-outer {
          img {
          }
        }
        .kit-content {
          h1 {
          }
          p {
          }
          .kit-list {
            .kit-list-item {
              i {
              }
            }
          }
        }
      }
      .values-section {
        h1 {
          font-size: 2.2rem;
        }
        .values-list {
          .values-list-item {
            .banner-outer {
              img {
              }
            }
            h3 {
              font-size: 1.2rem;
            }
            p {
            }
          }
        }
      }
    }
  }
  ${media.max.tablet} {
    .home {
      .top-section {
        flex-direction: column;
        .banner-section {
          order: 1;
          position: static;
          width: 100%;
          .background {
            width: 100%;
            height: 400px;
          }
          .banner-image {
            /* max-width: ; */
            margin: auto;
            padding-top: 2rem;
            max-width: 90%;
            img {
              width: 100%;

              object-fit: cover;
            }
          }
        }
        .intro-section {
          order: 2;
          padding: 0;
          margin: auto;
          width: 90%;
          padding-left: 1rem;
          h1 {
            width: 70%;
            line-height: 100%;
            font-size: 3rem;
            margin: 0;
          }
          p {
            margin: 0;
            width: 60%;
            font-size: 1.3rem;
            margin-top: 1rem;
          }
          button {
            width: 150px;
            margin-top: 2rem;
          }
        }
      }
      .kit-section {
        flex-direction: column;
        .banner-outer {
          min-width: 100%;
          img {
            height: 400px;
          }
        }
        .kit-content {
          width: 100%;
          h1 {
          }
          p {
          }
          .kit-list {
            grid-template-columns: 1fr 1fr 1fr;
            .kit-list-item {
              i {
              }
            }
          }
        }
        button {
        }
      }
      .values-section {
        .values-list {
          gap: 1rem;
          .values-list-item {
            padding: 0;
            .banner-outer {
              img {
              }
            }
            h3 {
              padding: 0.5rem 0 0 0;
            }
            p {
            }
          }
        }
      }
    }
  }
  ${media.max.mobileXL} {
    .home {
      .top-section {
        .banner-section {
          .background {
            height: 200px;
          }
          .banner-image {
            padding-top: 0;
            height: 400px;
            img {
              height: 300px;
            }
          }
        }
        .intro-section {
          margin-top: -1.5rem;
          text-align: center;
          width: 80%;
          padding: 0;
          h1 {
            width: 95%;
            font-size: 2.8rem;
            line-height: 110%;
          }
          p {
            width: 100%;
          }
          button {
            width: 200px;
          }
        }
      }
      .kit-section {
        .banner-outer {
          img {
          }
        }
        .kit-content {
          width: 95%;
          h1 {
          }
          p {
          }
          .kit-list {
            grid-template-columns: 1fr 1fr;

            .kit-list-item {
              i {
              }
            }
          }
        }
      }
      .values-section {
        .values-list {
          flex-direction: column;
          gap: 3rem;
          .values-list-item {
            width: 100%;
            max-width: 300px;
            margin: auto;
            .banner-outer {
              img {
              }
            }
            h3 {
            }
            p {
            }
          }
        }
      }
    }
  }
`;

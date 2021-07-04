import styled from "styled-components";
import media from "../util/media-queries";
import variables from "./variables";

// .home{
//     .top-section{
//       .banner-section{
//         .background{}
//         .banner-image{}
//       }
//       .intro-section{
//         h1{}
//         p{}
//         button{}
//       }
//     }
//   }

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
    }
  }
`;

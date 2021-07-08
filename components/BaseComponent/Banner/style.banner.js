import styled from "styled-components";
export default styled.div`
  .banner {
    position: relative;
    height: 25rem;
    overflow: hidden;
    .overlay {
      width: 100%;
      height: 25rem;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
      position: absolute;
      top: 0;
    }
    .banner__image {
      height: 25rem;
      width: 100%;
      /* margin: auto; */
      align-items: center;
      align-content: center;
      background: #d5fafc;

      img {
        position: absolute;
        left: 50%;
        background-color: rgba(0, 0, 0, 0.3);
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        /* max-height: 25rem; */
        height: 17rem;
        width: 95%;
        top: 6rem;
        object-fit: cover;
        background-size: cover;
        background-position: center center;
        border-radius: 15px;
      }
    }
    .title {
      z-index: 2;
      position: absolute;
      top: 9rem;
      width: 100%;
      text-align: center;
      h3 {
        color: white;
        font-weight: 700;
        font-size: 3rem;
        line-height: 54px;
      }
    }
    .quote {
      z-index: 2;
      position: absolute;
      bottom: 4rem;
      left: 50%;
      width: 80%;
      transform: translateX(-50%);
      text-align: center;
      p {
        color: #dedede;
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .title {
      z-index: 2;
      position: absolute;
      top: 10rem !important;

      width: 100%;
      text-align: center;
      h3 {
        color: white;
        font-weight: 700;
        font-size: 2.7rem !important;
        line-height: 54px;
      }
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 425px) {
    .title {
      z-index: 2;
      position: absolute;
      top: 10rem !important;

      width: 100%;
      text-align: center;
      h3 {
        color: white;
        font-weight: 700;
        font-size: 2.5rem !important;
        line-height: 54px;
      }
    }
  }
  @media only screen and (max-width: 425px) and (min-width: 320px) {
    .title {
      z-index: 2;
      position: absolute;
      top: 10rem !important;

      width: 100%;
      text-align: center;
      h3 {
        color: white;
        font-weight: 700;
        font-size: 2.35rem !important;
        line-height: 54px;
      }
    }
  }
`;

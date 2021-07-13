import styled from "styled-components";

export default styled.div`
  .footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    background-color: whitesmoke;

    margin: auto;

    grid-gap: 20%;
    padding: 0% 5%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    h3 {
      margin: 0;
    }
    h2 {
      font-family: quam_black;
      font-size: 2.5rem;
      margin: 0;
    }
    .footer__logo {
      display: flex;
      justify-content: flex-start;
      grid-gap: 1rem;
      margin-left: 1rem;
      h2 {
        font-family: "quam_black";
        color: black;
      }
      .footer__social__icons {
        display: flex;

        grid-gap: 1.5rem;

        div {
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
      }
    }
    .footer__content {
      display: flex;
      grid-gap: 10%;
      width: 100%;
      .footer__content-first {
        h3 {
          font-size: 1.3rem;
          font-weight: 500;
        }
        ul {
          li {
            justify-content: space-evenly;
            font-size: 1.1rem;
            line-height: 1.75rem;
            list-style: none;
            margin: 0.7rem 0rem;
            a {
              color: #000000;
            }
          }
        }
      }
      .footer__content-second {
        h3 {
          font-size: 1.3rem;
          font-weight: 500;
        }
        ul {
          li {
            justify-content: space-evenly;
            font-size: 1.1rem;
            line-height: 1.75rem;
            list-style: none;
            margin: 0.7rem 0rem;
            a {
              color: #000000;
            }
          }
        }
      }
    }
    .footer__content-third {
      margin-left: -25%;
      h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }
      div {
        border: 1px solid black;
        border-radius: 13px;
        width: 100%;
        height: 3rem;
        display: flex;
        margin-top: 0.9rem;
        input {
          border: none;
          font-size: 1.2rem;
          background-color: whitesmoke;

          height: 1.5rem;
          margin-left: 1rem;
          margin-top: 0.7rem;
          outline: none;
        }
        input:hover {
          border: none;
          outline: none;
        }
        img {
          width: 25px;
          height: 20px;
          padding-top: 0.5rem;

          margin-right: 0.5rem;
          margin-left: 0%.5rem;
          transform: translateY(5px);
        }
      }
    }
  }
  .footer__bottom {
    background-color: black;
    height: 4rem;
    display: flex;

    justify-content: center;
    align-items: center;
    .footer__bottom-left {
      span {
        color: white;
      }
    }
  }
  @media only screen and (max-width: 870px) and (min-width: 768px) {
    .footer {
      grid-gap: 10% !important;
      .footer__content {
        display: flex;
        grid-gap: 7% !important;
        width: 100%;
      }
    }
    .footer .footer__content .footer__content-third {
      margin-left: -20%;
    }
  }

  @media only screen and (max-width: 767px) {
    .footer {
      padding-top: 2rem !important;
      display: block !important;
      .footer__logo {
        span {
          font-size: 1.3rem !important;
        }
      }
      .footer__content {
        display: flex;
        grid-gap: 15% !important;
        width: 100%;
        margin-top: 2rem !important;
        .footer__content-first,
        .footer__content-second,
        .footer__content-third {
          h3 {
            font-size: 1.5rem !important;
            font-weight: 500;
          }
          ul {
            li {
              font-size: 1.05rem !important;
            }
          }
        }
      }
    }
    .footer__logo {
      margin-left: 0rem !important;
    }
    .footer .footer__content-third {
      width: 90% !important;
      margin-top: 1rem !important;
      margin-left: 0rem !important;
      div {
        input {
          width: 100% !important;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .footer__social__icons {
      display: flex;

      grid-gap: 0.8rem;

      div {
        img {
          width: 2.8rem !important;
          height: 2.8rem !important;
        }
      }
    }
  }
`;

import styled from "styled-components";
export default styled.div`
  .signup {
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #d9e1ff;
    width: 100%;
    max-width: 1450px;
    margin: auto;
    margin-top: 4.5rem;
    //position: relative;
    height: calc(100vh - 4.5rem);
    .signup__left {
      width: 80%;
      float: left;
      height: calc(100vh - 4.5rem);
      margin: auto;
      justify-content: center;
      align-items: center;
      display: flex;
      align-items: center;
      .signup__content {
        position: relative;
        width: 100%;
        max-width: 450px;

        label {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 2rem;
        }
        input {
          height: 2.53rem;
          margin-bottom: 0.5rem;
          border-radius: 3.75rem;
          font-size: 1rem;
          width: 100%;
          border: none;
          z-index: 2;
          padding-left: 1rem;
          box-sizing: border-box;
        }
        .signup-terms {
          margin-top: 0.5rem;
          align-items: center;
          padding-left: 1rem;
          a {
            margin-left: 0.4rem;
            text-decoration: underline;
            color: black;
            font-weight: 600;
          }
        }
        .signup__button {
          margin-top: 1rem;
          button {
            height: 2.53rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 100%;

            background-color: black;
            color: white;
            border: none;
          }
        }
        .signup__social {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;

          //transform: translateY(-50%);
          hr {
            border: 1px solid black;
            width: 50%;
          }
          span {
            text-align: center;
            justify-content: center;
            font-size: 0.75rem;
            line-height: 1rem;
            width: 100%;
          }
        }
        .signup__google {
          margin-top: 1rem;

          button {
            height: 2.53rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 100%;
            border: none;
            background-color: white;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 0.5rem;
            img {
              width: 1.05rem;
              padding: auto;
              height: 0.9rem;
            }
          }
        }
        .signup__fb {
          margin-top: 1rem;

          button {
            height: 2.53rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 100%;
            padding-left: 1.5rem;
            background-color: white;
            color: black;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            grid-gap: 0.3rem;
            img {
              width: 1.05rem;
              padding: auto;
              height: 1rem;
            }
          }
        }
      }
      .login-btn {
        margin-top: 1rem;
        padding-left: 1rem;
        a {
          margin-left: 0.4rem;
          text-decoration: underline;
          color: black;
          font-weight: 600;
        }
      }
    }
    .signup__right {
      width: 100%;
      float: right;
      overflow-y: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow-y: hidden;
      }
    }
  }

  @media only screen and (max-width: 919px) and (min-width: 768px) {
    .signup__social {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      //transform: translateY(-50%);
      hr {
        border: 1px solid black;
        width: 35% !important;
      }
      span {
        text-align: center;
        justify-content: center;
        font-size: 0.75rem;
        line-height: 1rem;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 767px) and (min-width: 640px) {
    .signup__social {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      //transform: translateY(-50%);
      hr {
        border: 1px solid black;
        width: 20% !important;
      }
      span {
        text-align: center;
        justify-content: center;
        font-size: 0.75rem;
        line-height: 1rem;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 639px) and (min-width: 426px) {
    .signup__social {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      //transform: translateY(-50%);
      hr {
        border: 1px solid black;
        width: 5% !important;
      }
      span {
        text-align: center;
        justify-content: center;
        font-size: 0.65rem !important;
        line-height: 1rem;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .signup__content {
      width: 100%;
      max-width: 300px !important;

      position: absolute !important;

      left: 50%;

      top: 50%;
      transform: translate(-50%, -50%);
      .signup__social {
        span {
          font-weight: 600 !important;
        }
      }
    }
    .signup__right {
      width: 100%;
      float: right;
      overflow-y: hidden;
      background-color: #d9e1ff;
      img {
        display: none !important;
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow-y: hidden;
      }
    }
    .signup {
      height: 100% !important;
      position: absolute !important;
    }
  }
`;

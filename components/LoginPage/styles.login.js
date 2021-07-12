import styled from "styled-components";

export const ForgotPassWrapper = styled.div`
  /* margin: 40vh auto;
  
  form {
    display: flex;
    div {
      margin: auto;
    }
  */
  height: 100vh;
  background: linear-gradient(302deg, pink, #e6ecf3, pink);
  display: flex;
  justify-content: center;
  align-items: center;
  .recovery {
    display: flex;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 7rem 0rem 2.5rem 0rem;

    .top-lock {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 13px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      .lock-icon-outer {
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 2rem;
        flex-direction: row;
        width: 90%;

        hr {
          width: 6rem;
          transform: rotate(90deg);
          border: 2px solid grey;
          height: 0;
          display: block;
        }
        i {
          font-size: 8rem;
          color: darkslategray;
        }
        .label-text {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          h3 {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          h4 {
            font-size: 2rem;
            margin-top: 0rem;
          }
        }
      }
      hr {
        border: 2px solid grey;
        width: 90%;
        display: none;
      }
      .email-outer {
        width: 90%;
        margin-top: 2rem;
        label {
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 2rem;
          margin-bottom: 1rem;
        }
        input {
          height: 3.53rem;
          margin: 1rem 0rem;
          border-radius: 1.75rem;
          font-size: 1.3rem;
          width: 100%;

          z-index: 2;
          /* padding-left: 1.2rem; */
          padding-left: 1rem;

          box-sizing: border-box;
        }
        .send_button {
          margin: 1rem 0rem 4rem 0rem;

          width: 100%;
          button {
            height: 3.53rem;
            border-radius: 1.75rem;
            font-size: 1.3rem;
            width: 100%;

            background-color: black;
            color: white;
            border: none;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    .recovery .top-lock .lock-icon-outer {
      flex-direction: column;
      hr {
        display: none !important;
      }
      .label-text {
        align-items: center !important;
        justify-content: center !important;
        h3 {
          font-size: 2.5rem !important;
        }
        h4 {
          font-size: 1.32rem !important;
        }
      }
    }
    .recovery .top-lock .email-outer {
      margin-top: 1.5rem !important;
    }
  }
`;
export default styled.div`
  .login {
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #d9e1ff;
    width: 100%;
    max-width: 1450px;
    margin: auto;
    margin-top: 4.5rem;
    //position: relative;
    height: calc(100vh - 4.5rem);
    .login__left {
      width: 80%;
      float: left;
      height: calc(100vh - 4.5rem);
      margin: auto;
      justify-content: center;
      align-items: center;
      display: flex;
      align-items: center;
      //position: fixed;
      .login__content {
        position: relative;
        width: 100%;
        max-width: 450px;
      }
      .login__password {
        a {
          float: right;
          margin: 0.5rem 0.25rem 1rem 0rem;
          color: black;
        }
      }
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
        /* padding-left: 1.2rem; */
        padding-left: 1rem;
        border: none;
        box-sizing: border-box;
      }

      .login__button {
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
      .login__social {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
      .login__google {
        margin-top: 1rem;
        span {
          vertical-align: middle;

          button {
            height: 2.52rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 100%;
            border: none;

            background-color: white;
            color: black;
            img {
              width: 1.05rem;
              //padding: auto;
              height: 0.9rem;
              margin-right: 0.35rem;
            }
          }
        }
      }
      .login__fb {
        margin-top: 1rem;

        span {
          vertical-align: middle;

          button {
            height: 2.52rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 100%;
            border: none;

            background-color: white;
            color: black;
            img {
              width: 1.05rem;
              //padding: auto;
              height: 0.9rem;
              margin-right: 0.35rem;
            }
          }
        }
      }
      .signup-btn {
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
  }
  .login__right {
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
  @media only screen and (max-width: 919px) and (min-width: 768px) {
    .login__social {
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
    .login__social {
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
    .login__social {
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
    .login__content {
      width: 100%;
      max-width: 300px !important;

      position: absolute !important;

      left: 50%;

      top: 50%;
      transform: translate(-50%, -50%);

      .login__social {
        span {
          font-weight: 600 !important;
        }
      }
    }
    .login__right {
      width: 100%;
      float: right;
      overflow-y: hidden;
      background-color: #d9e1ff;
      img {
        display: none !important;
        width: 100%;
        height: 100%;
        object-fit: none;
        overflow-y: hidden;
      }
    }
    .login {
      height: 100% !important;
      position: absolute !important;
    }
  }
`;

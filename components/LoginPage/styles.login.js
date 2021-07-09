import styled from "styled-components";

export const ForgotPassWrapper = styled.div`
  /* position: relative; */
  margin: 40vh auto;
  form {
    display: flex;
    div {
      margin: auto;
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
        display: grid;
        align-items: center;
        width: 100%;
        grid-template-columns: 0.8fr 1.3fr 0.8fr;

        //transform: translateY(-50%);
        hr {
          border: 1px solid black;
          width: 100%;
        }
        span {
          text-align: center;
          justify-content: center;
          font-size: 0.75rem;
          line-height: 1rem;
          padding-left: 5px;
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
        margin-top: 1.5rem;
        align-items: center;
        text-align: center;
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

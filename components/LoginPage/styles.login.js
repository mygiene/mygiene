import styled from "styled-components";
export default styled.div`
  .login {
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: #e5e5e5;
    width: 100%;
    max-width: 1450px;
    margin: auto;
    margin-top: 4.5rem;
    //position: relative;
    height: calc(100vh - 4.5rem);
    .login__left {
      width: 100%;
      float: left;
      height: 100%;

      justify-content: center;
      align-items: center;
      //display: block;
      //position: fixed;
      .login__content {
        transform: translateY(-50%);
        margin: 25% auto 25% auto;
        padding-left: 5%;
        position: relative;
        width: 80%;
        height: 0%;

        label {
          font-size: 1.2rem;
          font-weight: 400;
        }
        input {
          height: 2.53rem;
          margin-bottom: 0.5rem;
          border-radius: 3.75rem;
          font-size: 1rem;
          width: 90%;
          border: none;
          z-index: 2;
          padding-left: 1.2rem;
          border: none;
        }

        .login__button {
          margin-top: 1rem;
          button {
            height: 2.53rem;
            border-radius: 3.75rem;
            font-size: 1rem;
            width: 90%;
            padding-left: 1.5rem;
            background-color: black;
            color: white;
          }
        }
        .login__social {
          margin-top: 1.5rem;
          display: grid;
          align-items: center;
          width: 90%;
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
              width: 90%;
              border: none;
              padding-left: 1.5rem;
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
              width: 90%;
              border: none;
              padding-left: 1.5rem;
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
      }
    }
    .login__right {
      width: 100%;
      float: right;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .login__content {
      transform: translateY(10%) !important;
      margin: 30% auto !important;
      padding-left: 0px !important;
      position: absolute !important;
      width: 100% !important;
      height: 100% !important;
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
      background-color: rgba(255, 255, 255, 0.3) !important;
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

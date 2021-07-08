import styled from "styled-components";
import media from "../util/media-queries";

export default styled.div`
  .contact-outer {
    margin: 5rem 0;
    display: flex;
    align-items: center;
    gap: 0;
    position: relative;
    background-color: #f8f8f8;
    .contact-intro {
      box-sizing: border-box;
      width: 50%;
      padding-left: 4rem;
      color: #055f5b;
      .head {
        display: flex;
        align-items: center;
        margin-bottom: 2.5rem;
        gap: 0.5rem;
        .line {
          width: 50px;
          height: 2px;
          background-color: #055f5b;
          border: none;
        }
      }
      .highlight {
        font-size: 2rem;
        margin-left: 1rem;
        font-weight: 700;
      }
      .social-icons {
        margin-left: 1rem;
        margin-top: 1.5rem;
        display: flex;
        gap: 3rem;
        div {
          /* cursor: pointer; */
          overflow: hidden;
          background-color: #055f5b;
          border-radius: 10px;
          width: 40px;
          height: 40px;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: inherit;
            height: inherit;
            i {
              font-size: 1.4rem;
              color: whitesmoke;
            }
          }
        }
      }
    }
    .contact-form {
      width: 50%;
      background-color: #64ccd1;
      form {
        position: relative;
        z-index: 3;
        width: 80%;
        max-width: 600px;
        background-color: white;
        border-radius: 1.5rem;
        display: flex;
        gap: 1.5rem;
        flex-direction: column;
        padding: 5rem 3rem;
        margin: 3rem 0 3rem -4rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        .name-email {
          display: flex;
          gap: 1rem;
          flex-direction: row;
          .input-fields {
            width: 50%;
          }
        }

        input {
          color: black;
          font-weight: 500;
          width: 100%;
          height: 3.2rem;
          font-size: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 0.8rem;
          padding: 0 10px;
          box-sizing: border-box;
        }

        textarea {
          width: 100%;
          font-size: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 0.8rem;
          padding: 10px;
          height: 6rem;
          box-sizing: border-box;
          overflow: hidden;
        }
        button {
          width: 170px;
          height: 50px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 1.3rem;
          font-size: 1.1rem;
        }
      }
    }
    .contact-bg {
      img {
        position: absolute;
        bottom: -19px;
        right: 0;
        z-index: 2;
      }
    }
  }
  ${media.max.mobileXL} {
    .contact-outer {
      flex-direction: column;
      .contact-intro {
        width: 100%;

        padding: 6rem 0 6rem 4rem;
      }
      .contact-form {
        width: 100%;
        form {
          width: 100%;
          box-sizing: border-box;
          border-radius: 0;
          background-color: transparent;
          margin: 0;
          .name-email {
            flex-direction: column;
            .input-fields {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

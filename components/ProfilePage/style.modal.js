import styled from "styled-components";

export default styled.div`
  .edit-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.7rem;
    }
    .edit-form {
      width: 95%;
      margin: grid-auto-flow;

      form {
        display: flex;
        flex-direction: column;
        grid-gap: 1rem;

        width: 100%;
        margin: auto;
        .form-fields {
          display: flex;
          flex-direction: column;

          input {
            height: 2rem;
            margin: 0.5rem 0rem;

            font-size: 1.1rem;

            border: none;
            z-index: 2;
            padding-left: 1rem;

            box-sizing: border-box;
          }
        }
        .form-fields-address {
          display: flex;
          flex-direction: column;

          .address-fields {
            display: flex;
            flex-direction: column;
            display: flex;
            div {
              display: flex;
              grid-gap: 1rem;
              align-items: center;
              input,
              textarea {
                margin: 0.5rem 0rem;

                font-size: 1.1rem;

                border: none;
                z-index: 2;
                padding-left: 1rem;
                min-height: 2rem;
                box-sizing: border-box;
              }
              input {
                width: 30%;
                height: 2rem;
              }
              textarea {
                width: 80%;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              button {
                cursor: pointer;

                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                border: none;
                color: black;
                font-weight: 700;
                i {
                  font-size: 1.5rem;
                }
              }
            }
          }
        }
        .form-button {
          margin-top: 2rem;
          button {
            height: 3rem;
            border-radius: 1.75rem;
            font-size: 1.3rem;
            width: 100%;

            background-color: #d5fafc;
            color: black;
            border: none;
            font-weight: 800;
          }
          button:hover {
            background: #000000;
            color: white;
          }
        }
      }
      .fetch-address {
        form {
          display: flex;
          flex-direction: row;
          .address-card {
            position: relative;
            background: whitesmoke;
            border-radius: 8px;
            width: 50%;
            .input-fields:nth-child(1) {
              margin-top: 3rem;
            }
            .input-fields {
              width: 95%;
              margin: auto;

              input {
                height: 2rem;
                margin: 0.5rem 0rem;

                font-size: 1.1rem;
                width: 100%;
                border: none;
                z-index: 2;
                padding-left: 1rem;

                box-sizing: border-box;
                max-width: 100%;
              }
              textarea {
                margin: 0.5rem 0rem;

                font-size: 1.1rem;
                width: 100%;
                border: none;
                z-index: 2;
                padding-left: 1rem;

                box-sizing: border-box;
                max-width: 100%;
              }
            }
            .delete-button {
              position: absolute;
              top: 0.5rem;
              right: 1rem;
              button {
                cursor: pointer;

                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                border: none;
                color: black;
                font-weight: 700;
                i {
                  font-size: 1.25rem;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .form-fields-address {
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 639px) {
    .address-fields {
      display: flex;
      flex-direction: column;
      display: flex;

      div {
        display: flex;
        grid-gap: 0.25rem !important;
        align-items: center !important ;
        flex-direction: column !important;

        input,
        textarea {
          margin: 0.5rem 0rem;
          border-radius: 0.5rem;
          font-size: 1.1rem;
          line-height: 1.6rem;
          border: none;
          z-index: 2;
          padding-left: 1rem;

          box-sizing: border-box;
        }
        input {
          width: 100% !important;
          height: 2rem;
        }
        textarea {
          width: 100% !important;
          height: 3.5rem;
        }
      }
    }
    .fetch-address {
      form {
        display: flex;
        flex-direction: column !important;
        .address-card {
          position: relative;
          background: #f4f0ec;
          border-radius: 8px;
          width: 100% !important;
          .input-fields:nth-child(1) {
            margin-top: 3rem;
          }
          .input-fields {
            width: 95%;
            margin: auto;

            input,
            textarea {
              margin: 0.5rem 0rem;
              line-height: 1.6rem;
              font-size: 1.1rem;
              width: 100%;
              border: none;
              z-index: 2;
              padding-left: 1rem;

              box-sizing: border-box;
              max-width: 100%;
            }
          }
          .delete-button {
            position: absolute;
            top: 0.5rem;
            right: 1rem;
            button {
              cursor: pointer;

              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              border: none;
              color: black;
              font-weight: 700;
              i {
                font-size: 1.25rem;
              }
            }
          }
        }
      }
    }
  }
`;

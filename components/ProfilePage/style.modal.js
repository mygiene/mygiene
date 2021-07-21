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

        width: 90%;
        margin: auto;
        .form-fields {
          display: flex;
          flex-direction: column;

          input {
            height: 2rem;
            margin: 0.5rem 0rem;
            border-radius: 1.75rem;
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
              grid-gap: 2rem;
              align-items: center;
              input,
              textarea {
                margin: 0.5rem 0rem;
                border-radius: 1.75rem;
                font-size: 1.1rem;

                border: none;
                z-index: 2;
                padding-left: 1rem;

                box-sizing: border-box;
              }
              input {
                width: 30%;
                height: 2rem;
              }
              textarea {
                width: 70%;
                height: 3.5rem;
              }
            }
          }
        }
        .form-button {
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
    }
  }
  @media only screen and (max-width: 425px) {
    .form-fields-address {
      display: flex;
      flex-direction: column;

      .address-fields {
        display: flex;
        flex-direction: column;
        display: flex;

        div {
          display: flex;
          grid-gap: 0.5rem !important;
          align-items: flex-start !important ;
          flex-direction: column !important;
          input,
          textarea {
            margin: 0.5rem 0rem;
            border-radius: 1.75rem;
            font-size: 1.1rem;

            border: none;
            z-index: 2;
            padding-left: 1rem;

            box-sizing: border-box;
          }
          input {
            width: 30% !important;
            height: 2rem;
          }
          textarea {
            width: 100% !important;
            height: 3.5rem;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export default styled.div`
  margin: 4.5rem auto;
  width: 90%;
  max-width: 1450px;
  form {
    .shipping {
      .shipping-title {
        font-size: 1.5rem;
        font-weight: 700;
        padding: 1rem 0;
      }
      .shipping-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        input {
          height: 2.5rem;
        }
        .country-dropdown {
          display: flex;
          height: 2.5rem;
          background-color: whitesmoke;
          border: none;
        }
      }
    }
    .billing {
      .card-details {
        margin-top: 1rem;
        input {
          height: 2.5rem;
          width: 100%;
          margin-bottom: 1rem;
        }
      }
      .billing-title {
        font-size: 1.5rem;
        font-weight: 700;
        padding: 1rem 0;
      }
      .billing-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        input {
          height: 2.5rem;
        }
        .country-dropdown {
          display: flex;
          height: 2.5rem;
          background-color: whitesmoke;
          border: none;
        }
        .card-details {
          display: flex;
          flex-direction: column;
          input {
            margin-bottom: 2rem;
          }
        }
      }
    }
    button {
      margin-top: 2rem;
      width: 100%;
      background-color: black;
      border: none;
      color: whitesmoke;
      padding: 1rem 0;
    }
  }
`;

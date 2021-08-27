import styled from "styled-components";

export default styled.div`
  .edit-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;

    form {
      display: flex;
      flex-direction: column;
      grid-gap: 1rem;

      width: 100%;
      margin: auto;
      .form-fields {
        display: flex;
        width: 100%;
        flex-direction: column;
        input {
          height: 2rem;
          width: 100%;
          margin: 0.5rem 0rem;

          font-size: 1.1rem;

          border: none;
          z-index: 2;
          padding-left: 1rem;

          box-sizing: border-box;
        }
      }
      .form-button {
        margin: 2rem auto;
        width: 100%;

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
`;

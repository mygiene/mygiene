import styled from "styled-components";
import variables from "../../styles/variables";
import media from "../../util/media-queries";

export default styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    width: 95%;
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    .preview {
      width: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-width: 500px;
      }
    }
    input {
      width: 300px;
      height: 30px;
    }
    textarea {
      width: 300px;
    }
    .form-content {
      display: flex;
      gap: 1.5rem;
      flex-direction: column;

      div {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
      }
    }
    button {
      color: whitesmoke;
      background-color: black;
      border: none;
      padding: 0.5rem;
      height: 3rem;
      &:disabled {
        background-color: grey;
        color: white;
        cursor: progress;
      }
    }
  }
  ${media.max.mobileXL} {
    form {
      flex-direction: column;
    }
  }
`;

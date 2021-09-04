import styled from "styled-components";
export default styled.div`
  .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    grid-gap: 5%;
    width: 95%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    flex-direction: row;
    -webkit-flex-direction: row;

    margin: 5rem auto;

    div:nth-child(2) {
      width: 72.5%;
      h3 {
        font-weight: 600;
      }
      h4 {
        font-weight: 600;
      }
      p {
        justify-content: space-evenly;
        font-size: 0.9rem;
        line-height: 1.7rem;
        font-weight: 400;
        font-family: sans-serif;
        a {
          margin-left: 0.35rem;
          color: #0a4d51;
          font-weight: 700;
        }
      }
      ul {
        li {
          justify-content: space-evenly;
          font-size: 0.95rem;
          line-height: 1.7rem;

          font-style: italic;
          list-style: none;
          padding-top: 1rem;
          font-family: sans-serif;
          a {
            margin-left: 0.35rem;
            color: #0a4d51;
            font-weight: 700;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div:nth-child(2) {
      width: 95% !important;
      margin: auto !important;
    }
  }
`;

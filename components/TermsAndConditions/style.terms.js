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
    margin: auto;
    margin: 5rem auto;

    div:nth-child(2) {
      width: 72.5%;
      h3 {
        font-weight: 600;
      }
      h4 {
        font-weight: 500;
      }
      p {
        justify-content: space-evenly;
        font-size: 0.9rem;
        line-height: 1.7rem;
        font-weight: 400;
        font-family: sans-serif;
        a {
          padding-left: 1rem;
        }
      }
      details {
        summary {
          margin: 2rem 0rem 2rem 0rem;
          list-style-type: none;
          text-transform: uppercase;
          font-size: 1.1rem;
          font-weight: 600;
        }
        summary::marker {
          display: none;
        }
        summary:after {
          content: "+";
          color: #fff;
          float: left;
          font-size: 1.8rem;
          font-weight: 400;
          margin: -7px 10px 0 0;
          padding: 0px 3px;
          color: black;
          text-align: center;
          width: 20px;
          border: 1px solid black;
        }
      }
      details[open] summary:after {
        content: "-";
        padding: 0px 3px;
        margin: -7px 10px 0 0;
      }
      .contact__section {
        span {
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
  @media only screen and (max-width: 500px) {
    details {
      summary {
        margin: 1rem 0rem 1.5rem 0rem;
        list-style-type: none;
        text-transform: uppercase;
        font-size: 0.85rem !important;
        font-weight: 600;
      }
    }
  }
`;

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
    margin-top: 5rem;
    .navigation {
      border: 1px solid rgba(0, 0, 0, 0.27);
      border-radius: 13px;
      width: 22.5%;
      height: 184px;
      ul {
        li {
          list-style: none;
          padding: 1rem 1rem 0.5rem 1rem;

          a {
            display: flex;
            div {
              border-radius: 50%;
              width: 15px;
              height: 15px;
              padding: 10px;
              background: #d9d9d9;
              /* border: 3px solid #000; */
              color: #000;
              text-align: center;
            }
            span {
              padding: 10px;
              color: black;
            }
          }
        }
        li:hover {
          background: #d5fafc;
        }
        li:nth-child(1):hover {
          border-top-left-radius: 13px;
          border-top-right-radius: 13px;
        }
        li:nth-child(3):hover {
          border-bottom-left-radius: 13px;
          border-bottom-right-radius: 13px;
        }
      }
    }

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
          margin: 1rem 0rem 1.5rem 0rem;
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
`;

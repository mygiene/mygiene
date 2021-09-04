import styled from "styled-components";
export default styled.div`
  .faqs {
    width: 90%;
    margin: 5rem auto;
    display: flex;
    flex-direction: column;

    .heading {
      text-align: center;
      h3 {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: darkslategray;
      }
    }
    .content {
      details {
        margin-bottom: 2rem;
        summary {
          margin: 1rem 0rem 1.5rem 0rem;
          list-style-type: none;
          text-transform: uppercase;
          font-size: 1.3rem;
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
      p {
        padding-left: 40px;
        line-height: 1.5rem;
        font-size: 1.1rem;
      }
    }
  }

  @media only screen and (max-width: 768px) and (min-width: 640px) {
    .faqs {
      width: 93%;

      .content {
        details {
          summary {
            font-size: 1.13rem;
          }
          p {
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 639px) and (min-width: 426px) {
    .faqs {
      width: 93%;

      .content {
        details {
          summary {
            font-size: 1.13rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
          }
          summary::after {
            content: "+";
            color: #fff;
            float: left;
            font-size: 1.5rem;
            font-weight: 400;
            margin: -7px 10px 0 0;
            padding: 0px 3px;
            color: black;
            text-align: center;
            width: 13px;
            border: 1px solid black;
          }
          p {
            font-size: 1.1rem;
            padding-left: 0px;
            padding-right: 40px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 425px) {
    .faqs {
      width: 93%;

      .content {
        details {
          margin-bottom: 1.5rem;
          summary {
            font-size: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
          }
          summary::after {
            content: "+";
            color: #fff;
            float: left;
            font-size: 1.3rem;
            font-weight: 400;
            margin: -7px 5px 0 0;
            padding: -1px 3px;
            color: black;
            text-align: center;
            width: 9px;
            border: 1px solid black;
          }
          p {
            font-size: 1.1rem;
            padding-left: 0px;
            padding-right: 30px;
          }
        }
        details[open] summary:after {
          content: "-";
          padding: 1px 3px;
          margin: auto;
          margin: -7px 5px 0 0;
          width: 13px;
        }
      }
    }
  }
`;

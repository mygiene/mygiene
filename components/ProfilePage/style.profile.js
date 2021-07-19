import styled from "styled-components";
export default styled.div`
  .container {
    display: flex;
    grid-gap: 5%;
    width: 95%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    flex-direction: column;

    margin: auto;
    margin-top: 5rem;
    .top-section {
      div {
        padding-left: 2rem;
        h3 {
          font-size: 1.7rem;
          margin-bottom: 0.7rem;
        }
        span {
          font-size: 1.4rem;
        }
      }
      hr {
        color: darkslategray;
      }
    }
    .profile-view {
      display: flex;
      grid-gap: 3rem;
      .right-side {
        div {
          display: inline-block;
          align-items: center;
          h3 {
            text-transform: uppercase;

            margin-top: 2rem;
            float: left;
          }
          i {
            margin-top: 1.5rem;
            margin-left: 2rem;
            font-size: 2rem;
            color: blue;
          }
        }
        .profile_details {
          display: flex;
          flex-direction: column;
          grid-gap: 1.5rem;
          margin-top: 1.5rem;
          .profile_details-name,
          .profile_details-email,
          .profile_details-contact,
          .profile_details-address {
            display: flex;
          }
          .profile_details-name {
            grid-gap: 6rem;
          }
          .profile_details-email {
            grid-gap: 4.9rem;
          }
          .profile_details-contact {
            grid-gap: 2.75rem;
            div {
              details {
                summary {
                  margin: 0rem 0rem 1rem 0rem;
                  list-style-type: none;
                  text-transform: uppercase;
                  font-size: 1rem;
                  font-weight: 600;
                }
                p {
                  margin: -0.3rem 0rem 0.8rem 2.2rem;
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
                  margin: -7px 4px 0 0;
                  padding: 0px 3px;
                  color: black;
                  text-align: center;
                  width: 20px;

                  /* border: 1px solid black; */
                }
              }
              details[open] summary:after {
                content: "-";
                padding: 0px 3px;
                margin: -7px 4px 0 0;
              }
            }
          }
          .profile_details-address {
            grid-gap: 4.3rem;
            div {
              details {
                summary {
                  margin: 0rem 0rem 1rem 0rem;
                  list-style-type: none;
                  text-transform: uppercase;
                  font-size: 1rem;
                  font-weight: 600;
                }
                p {
                  margin: -0.3rem 0rem 0.8rem 2.2rem;
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
                  margin: -7px 4px 0 0;
                  padding: 0px 3px;
                  color: black;
                  text-align: center;
                  width: 20px;
                  p {
                    margin: 0rem 0rem 0.5rem 2.2rem;
                  }
                }
              }
              details[open] summary:after {
                content: "-";
                padding: 0px 3px;
                margin: -7px 4px 0 0;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .profile-view {
      flex-direction: column;
    }
  }
`;

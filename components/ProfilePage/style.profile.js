import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
`;

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
        margin: 1.5rem 0rem 3rem 0rem;
        .head {
          width: 100%;
          display: flex;
          grid-gap: 4rem;
          align-items: center;
          justify-content: center;

          h3 {
            text-transform: uppercase;

            float: left;
          }
          button {
            display: flex;
            background-color: #d5fafc;
            border: none;
            /* width: 100px; */
            align-items: center;
            /* width: 5rem; */
            min-width: 5rem;
            height: 2.5rem;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            i {
              color: black;
              /* font-size: 1.8rem; */
              margin-left: 0.3rem;
            }
          }
          button:nth-child(3) {
            background-color: #f2f2f2;
          }
          button:hover {
            background-color: #000000;

            i,
            span {
              color: white;
            }
          }
          button:nth-child(3):hover {
            background-color: red;
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
            justify-content: space-between;
          }

          .profile_details-contact {
            /* grid-gap: 0.2rem; */
            span {
              width: 60%;
            }
          }
          .profile_details-address {
            /* grid-gap: 5.2rem; */

            div {
              display: flex;
              flex-direction: column;
              grid-gap: 0.5rem;

              div {
                display: flex;
                grid-gap: 0.5rem;
                flex-direction: row;
                align-items: center;

                span:nth-child(2) {
                  color: darkslategrey;
                  font-weight: 700;
                  font-size: 1.1rem;
                }
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
      .right-side {
        /* width: 100%; */
        display: flex !important;
        flex-direction: column !important;
        /* justify-content: center; */
        margin: 2rem auto !important;
        align-items: center !important;
        .head {
          grid-gap: 1.5rem !important;
          justify-content: center;
        }
        .profile_details {
          width: 100%;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) and (min-width: 426px) {
    .right-side {
      display: flex !important;
      flex-direction: column !important;
      /* justify-content: center; */
      margin: 2rem auto !important;
      align-items: center !important;
      .head {
        grid-gap: 2rem !important;
        justify-content: center;
      }
      .profile_details {
        width: 100%;
      }
    }
  }
`;

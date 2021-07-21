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
      margin-bottom: 3rem;
      .right-side {
        div {
          width: 100%;
          display: flex;
          grid-gap: 4rem;
          align-items: baseline;

          h3 {
            text-transform: uppercase;

            margin-top: 2rem;
            float: left;
          }
          button {
            display: flex;
            background-color: #d5fafc;
            border: none;
            /* width: 100px; */
            align-items: baseline;
            width: 5rem;
            height: 2.5rem;
            justify-content: center;
            align-items: center;
            border-radius: 10%;
            i {
              color: black;
              font-size: 1.8rem;
            }
          }
          button:hover {
            background-color: #000000;

            i,
            span {
              color: white;
            }
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
            grid-gap: 5rem;
          }
          .profile_details-contact {
            grid-gap: 0.2rem;
            div {
              span {
                width: 60%;
              }
            }
          }
          .profile_details-address {
            grid-gap: 5.2rem;

            div {
              display: flex;
              flex-direction: column;
              grid-gap: 0.8rem;

              div {
                display: flex;
                grid-gap: 1rem;
                flex-direction: row;
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
        margin: auto !important;
        align-items: center !important;
      }
    }
  }
  @media only screen and (max-width: 767px) and (min-width: 426px) {
    .right-side {
      /* width: 100%; */
      display: flex !important;
      flex-direction: column !important;
      /* justify-content: center; */
      margin: auto !important;
      align-items: center !important;
    }
  }
`;

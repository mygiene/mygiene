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
    .profile-view {
      display: flex;
      grid-gap: 3rem;
      .right-side {
        h3 {
          text-transform: uppercase;
        }
      }
    }
  }
`;

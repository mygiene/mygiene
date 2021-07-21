import styled from "styled-components";
export default styled.div`
  width: 22.5%;

  ul {
    overflow: hidden;
    li {
      list-style: none;

      a {
        display: flex;
        padding: 1rem 1rem 0.5rem 1rem;
        align-items: center;
        text-align: center;

        span {
          padding: 10px;
          color: grey;
          font-size: 1.3rem;
          text-transform: uppercase;
        }
      }
    }
    .active {
      a {
        span {
          color: black;
          font-weight: 900;
          font-size: 1.4rem;
        }
      }
    }
  }
  @media only screen and (max-width: 767px) {
    width: 0% !important;
    display: none !important;

    height: 2.5rem !important;
    .navigation {
      ul {
        display: flex !important;
        justify-content: center !important;
        grid-gap: 15% !important            ;
      }
    }
  }
`;

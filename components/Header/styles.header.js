import styled from "styled-components";
import variables from "../../styles/variables";
import media from "../../util/media-queries";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;

  .list {
    margin: 0 2rem;
    /* width: 95%; */
    background-color: whitesmoke;
    padding: 1rem;
    li {
      font-size: 1.4rem;
      text-align: center;
      display: block;
      padding: 1rem;
      a {
        color: black;
        text-decoration: none;
      }
      img {
        width: 2rem;
      }
    }
  }
`;

export default styled.div`
  /* max-width: 1450px; */
  .nav-outer-block {
    overflow: hidden;
    height: 71px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    .nav-list {
      ul {
        text-decoration: none;
        li {
          vertical-align: middle;
          display: inline-block;
          padding: 0 1rem;
          line-height: 2rem;
          img {
            width: 2rem;
          }

          & > a {
            text-decoration: none;
            color: black;
          }
          &:nth-child(5) {
            border-left: 1px solid black;
          }
          & .active {
            color: ${variables.primary_color};
          }
          &:nth-child(7) {
            display: none;
            padding-right: 0;
          }
        }
      }
    }
  }

  ${media.max.mobileXL} {
    .nav-outer-block {
      height: 50px;
      .nav-list {
        ul {
          li {
            display: none;
            &:nth-child(7),
            :nth-child(5) {
              display: inline-block;
              border: none;
              i {
                line-height: 2rem;
                vertical-align: middle;
                font-size: 1.7rem;
                &:hover {
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
`;

import styled from "styled-components";
import variables from "../../styles/variables";
import media from "../../util/media-queries";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 4.5rem;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* display: none; */
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

export const DropdownWrapper = styled.div`
  .dropdown-outer {
    position: fixed;
    top: 4.5rem;
    right: 6rem;
    ul {
      list-style-type: none;
      background-color: whitesmoke;
      padding: 1rem;
      li {
        padding: 0.5rem 1rem;

        a {
          color: #444;
        }
      }
    }
  }
  ${media.max.mobileXL} {
    .dropdown-outer {
      right: 4rem;
    }
  }
`;

export default styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: whitesmoke;
  z-index: 10;
  .nav-outer-block {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0rem 2rem;
    height: 4.5rem;
    .logo {
      display: flex;
      align-items: center;
      h3 {
        margin: 0;
      }
    }
    .nav-list {
      display: flex;
      align-items: center;
      ul {
        text-decoration: none;
        padding: 0;
        margin: 0;

        li {
          vertical-align: middle;
          display: inline-block;
          padding: 0 1rem;
          /* line-height: 2rem; */
          img {
            width: 2rem;
          }
          &:hover {
            cursor: pointer;
          }
          .product-counter {
            position: relative;
            background-color: black;
            color: whitesmoke;
            width: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1.5rem;
            /* text-align: center; */
            float: right;
            border-radius: 50%;
            margin-left: -1rem;
            margin-top: -0.5rem;
          }
          & > a {
            text-decoration: none;
            color: black;

            .circle {
              color: #eee;
              width: 2.5rem;
              height: 2.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #222;
              border-radius: 50%;
              user-select: none;
            }
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

import styled from "styled-components";
import variables from "../../styles/variables";
import media from "../../util/media-queries";

export const ItemWrapper = styled.div`
  color: #000f08;
  margin: 3rem auto;
  .item-wrapper {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: stretch;
    .item-img {
      width: 40%;
      background-color: #ffeeee;
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
    .item-content {
      width: 60%;
      align-self: stretch;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .item-name-quantity {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item-name {
          font-size: 1.7rem;
          font-weight: 700;
        }
        .item-quantity {
          display: flex;
          align-items: center;
          span {
            padding: 0.5rem;
          }
          button {
            border: 2px solid #bdbdbd;
            background-color: transparent;
            color: #bdbdbd;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            &:hover {
              border: 2px solid ${variables.primary_color};

              color: ${variables.primary_color};
            }
            & :disabled {
              cursor: default;
              border-color: #bdbdbd;
              color: #bdbdbd;
            }
          }
        }
        .item-price {
          padding-top: 0.5rem;
          flex-basis: 100%;
          width: 100%;
          font-size: 1.2rem;
          span {
            margin-left: 1rem;
            button {
              font-size: 1rem;
              color: #004525;
              border: none;
              background-color: transparent;
            }
          }
        }
      }

      .special-requirements {
        p {
          font-weight: 600;
          font-size: 1rem;
        }
        .services {
          display: flex;
          align-items: center;

          input {
            margin: 0;
            margin-right: 0.5rem;
            border-radius: 0;
          }
          label {
            color: #004525;
            cursor: pointer;
          }
          .service-price {
            color: #505050;
            flex-grow: 1;
            text-align: right;
          }
        }
      }
      .total {
        display: flex;
        font-weight: 700;
        font-size: 1.3rem;
        justify-content: space-between;
        align-items: center;
      }
      .checkout-btn {
        button {
          text-transform: uppercase;
          background-color: black;
          border: none;
          color: whitesmoke;
          font-size: 1rem;
          border-radius: 1.5rem;
          padding: 1rem 1.5rem;
          &:disabled {
            background-color: grey;
            color: white;
            cursor: progress;
          }
        }
      }
    }
  }
  ${media.max.desktopS} {
    .item-wrapper {
      .item-content {
        .item-name-quantity {
          .item-name {
            font-size: 1.5rem;
          }
        }
        .checkout-btn {
          button {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  ${media.max.tablet} {
    .item-wrapper {
      .item-img {
        width: 45%;
      }
      .item-content {
        width: 55%;
        padding-top: 0.5rem;
        .item-name-quantity {
          .item-name {
            font-size: 1.4rem;
          }
          .item-price {
            padding-top: 0;
          }
        }
        .checkout-btn {
          button {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  ${media.max.mobileXL} {
    .item-wrapper {
      flex-direction: column;
      .item-img {
        width: 100%;
      }
      .item-content {
        width: 100%;
        padding-top: 0rem;
        gap: 1rem;
        .item-name-quantity {
          .item-name {
            font-size: 1.4rem;
          }
          .item-price {
            padding-top: 0;
          }
        }
        .checkout-btn {
          button {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

export default styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 7rem auto;
  min-height: 60vh;
  .empty-cart-block {
    margin-top: 3rem;
    text-align: center;
  }
`;

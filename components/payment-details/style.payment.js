import styled from "styled-components";
import variables from "../../styles/variables";

export default styled.div`
  margin: 1rem auto;
  padding-top: 1rem;
  width: 90%;
  max-width: 1450px;
  .checkout-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .back {
        a {
          display: flex;
          gap: 0.8rem;
          font-size: 1.5rem;
          font-weight: 500;
          color: #46c3ca;
        }
      }
      .footer__logo {
        h2 {
          font-family: "quam_black";
          color: black;
          font-size: 1.8rem;
        }
      }
    }
    .head__title {
      h3 {
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
      }
    }
    .product__card {
      display: flex;
      justify-content: center;
      background-color: #ece9e9;
      width: 80%;
      align-items: center;
      border-radius: 16px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      .card {
        display: flex;
        margin: auto 2rem;
        width: 100%;
        justify-content: space-between;
        height: 180px;
        align-items: center;

        .image-outer {
          .product-image {
            width: 150px;
            height: 100px;
            //background-color: ${variables.primary_color};
            margin-left: 1rem;
            img {
              background-position: center;
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
        }
        .product__name {
          span {
            font-size: 1.3rem;
            font-weight: 600;
          }
        }
        .quantity {
          span {
            font-size: 1.3rem;
            font-weight: 500;
            span {
              font-weight: 600;
            }
          }
        }
        .price {
          span {
            font-weight: 600;
            font-size: 1.3rem;
          }
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 80%;
      margin: 2rem auto;

      .shipping {
        .shipping-title {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 1rem 0;
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
          align-items: center;

          .dropdown {
            select {
              height: 2rem;
              border-radius: 10px;
              background-color: #d5fafc;
              padding: 0% 4%;
              border: none;
            }
          }
        }
        .shipping-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          input {
            height: 2.5rem;
          }
          .country-dropdown {
            display: flex;
            height: 2.5rem;
            background-color: whitesmoke;
            border: none;
          }
        }
      }
      .billing {
        .card-details {
          margin-top: 1rem;
          input {
            height: 2.5rem;
            width: 100%;
            margin-bottom: 1rem;
          }
        }
        .billing-title {
          font-size: 1.5rem;
          font-weight: 700;
          padding: 1rem 0;
        }
        .billing-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          input {
            height: 2.5rem;
          }
          .country-dropdown {
            display: flex;
            height: 2.5rem;
            background-color: whitesmoke;
            border: none;
          }
          .card-details {
            display: flex;
            flex-direction: column;
            input {
              margin-bottom: 2rem;
            }
          }
        }
      }
      button {
        margin-top: 2rem;
        width: 100%;
        background-color: black;
        border: none;
        color: whitesmoke;
        padding: 1rem 0;
        &:disabled {
          background-color: grey;
          color: white;
          cursor: progress;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    .checkout-page {
      .product__card {
        width: 90%;
      }
      form {
        width: 90%;
      }
    }
  }
  @media only screen and (max-width: 767px) and (min-width: 426px) {
    .checkout-page {
      .product__card {
        width: 90%;
      }
      form {
        width: 90%;

        .shipping {
          .shipping-details {
            display: flex;
            flex-direction: column;
            grid-template-columns: 1fr;
          }
        }
        .billing {
          .billing-details {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 624px) and (min-width: 426px) {
    .checkout-page {
      .product__card {
        width: 90%;
        .card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .product__name,
          .quantity,
          .price {
            span {
              font-size: 1.25rem;
            }
          }
          .product__name {
            span {
              font-size: 1.35rem;
            }
          }
          .quantity,
          .price {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        }
      }
      form {
        width: 90%;

        .shipping {
          .shipping-details {
            display: flex;
            flex-direction: column;
            grid-template-columns: 1fr;
          }
        }
        .billing {
          .billing-details {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    .checkout-page {
      .product__card {
        width: 95%;
        .card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          .product__name,
          .quantity,
          .price {
            span {
              font-size: 1.15rem;
            }
          }
          .product__name {
            span {
              font-size: 1.2rem;
            }
          }
          .quantity,
          .price {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        }
      }
      form {
        width: 95%;

        .shipping {
          .shipping-details {
            display: flex;
            flex-direction: column;
            grid-template-columns: 1fr;
          }
        }
        .billing {
          .billing-details {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

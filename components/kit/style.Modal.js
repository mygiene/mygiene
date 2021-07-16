import styled from "styled-components";

export default styled.div`
  .item {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 0;
    }
    .item__content {
      .item__content-image {
        img {
          object-fit: cover;
          background-position: center;
        }
      }
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .item__content-text {
        margin: 0rem 2rem 2rem 2rem;
        text-align: center;

        span {
          line-height: 1.5rem;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

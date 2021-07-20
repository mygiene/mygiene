import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    span {
      line-height: 1.35rem;
      a {
        margin-left: 0.35rem;
        color: green;
      }
    }
  }
`;

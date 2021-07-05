import styled from "styled-components";
export default styled.div`
  width: 22.5%;
  height: 184px;
  ul {
    border: 1px solid rgba(0, 0, 0, 0.27);
    border-radius: 13px;
    overflow: hidden;
    li {
      list-style: none;

      a {
        display: flex;
        padding: 1rem 1rem 0.5rem 1rem;
        align-items: center;
        div {
          border-radius: 50%;
          width: 15px;
          height: 15px;
          padding: 10px;
          background: #d9d9d9;
          /* border: 3px solid #000; */
          color: #000;
          text-align: center;
        }
        span {
          padding: 10px;
          color: black;
        }
      }
    }
    li:hover,
    .active {
      background: #d5fafc;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 0% !important;
    display: none !important;
    height: 172px !important;
  }
`;

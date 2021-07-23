import styled from "styled-components";
export default styled.div`
  .users {
    margin-top: 5rem;
    padding: 0;
    width: 100%;
    top: 5rem;

    height: 100%;
    .heading {
      font-size: 1.8rem;

      display: flex;
      justify-content: center;
      margin: 7rem auto 3rem auto;
    }
    .table-outer {
      overflow-x: auto;
      width: 95%;

      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .container {
        width: 100%;

        display: table;
        padding: 0 0 5rem 0;

        td {
          font-weight: normal;
          font-size: 1.3rem;
          -webkit-box-shadow: 0 2px 2px -2px #0e1119;
          -moz-box-shadow: 0 2px 2px -2px #0e1119;
          box-shadow: 0 2px 2px -2px #0e1119;
          color: #fb667a;
          text-align: center;
          height: 2.5rem;
          vertical-align: middle;
        }

        th h1 {
          font-size: 1.5em;
          font-weight: 300;
          line-height: 1em;
          text-align: center;
          color: #4dc3fa;
        }
        td,
        th {
          background-color: #1f2739;
        }
        tr:nth-child(odd) {
          background-color: #323c50;
        }
        tr:nth-child(even) {
          background-color: #2c3446;
        }
        tbody {
          width: 100%;
          a {
            display: contents;
            width: 100%;
          }
        }
      }
    }
  }
`;

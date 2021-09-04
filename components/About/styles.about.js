import styled from "styled-components";
export default styled.div`
  .about {
    margin: 0;
    padding: 0;
    width: 100%;
    top: 5rem;

    width: 100%;
    height: 100%;
    .container {
      margin-top: 4.5rem;
      .about__banner {
        background-color: #d5fafc;
        text-align: center;
        width: 100%;
        height: 400px;
        position: relative;
        .about__banner-head {
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          padding-top: 2rem;
        }
        .banner-buttons {
          a {
            margin: 1rem 0.5rem 1rem 0.5rem;
            background: #d5fafc;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 80px;
            width: 150px;
            height: 45px;
            text-align: center;
            display: inline-flex;
            justify-content: center;
            align-items: center;

            color: #000000;
          }
          a:hover {
            background: #000000;
            border: 1px solid #000000;
            box-sizing: border-box;
            border-radius: 80px;

            color: white;
          }
        }
        .banner-image {
          z-index: 9;
          margin-top: -230px;
          position: absolute;
          width: 100%;

          img {
            width: 75%;
            height: 400px;
            object-fit: cover;
            border-radius: 15px;
          }
        }
      }
      .about__content {
        margin-top: 20.5rem;
        margin-bottom: 7rem;
        width: 100%;
        background: #fff9f9;
        /* position: absolute; */
        section {
          margin-left: 10%;
          margin-right: 10%;
        }

        .grid-flex {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          grid-gap: 2.4rem;
          -webkit-box-flex: 1;
          -webkit-flex-grow: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          flex-direction: row;
          -webkit-flex-direction: row;
        }
        .grid-flex:nth-child(1) {
          padding-top: 5rem;
        }
        .col {
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
        .col-left {
          -webkit-box-ordinal-group: -1;
          -webkit-order: -1;
          -ms-flex-order: -1;
          order: 1;
        }
        .col-text {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .Aligner-item {
          width: 100%;
          ul {
            li {
              display: inline-block;
              list-style: none;
              margin-right: 5px;
              line-height: 1rem;
              vertical-align: middle;
              color: #055f5b;
              font-weight: 700;
              font-size: 1rem !important;
              text-transform: uppercase;
              hr {
                border: 1px solid #055f5b;
                width: 27px;
              }
            }
          }
          h2 {
            letter-spacing: 0.02em;
            text-transform: uppercase;

            color: #055f5b;
          }
          p {
            letter-spacing: 0.03rem;

            line-height: 1.8rem;
            color: #000000;
            font-size: 1.05rem;
          }
        }
        #content-1 {
          margin-bottom: -220px;
        }
        #content-2 {
          margin-bottom: -220px;
        }
        #content-3 {
          margin-bottom: -200px;
        }
        .col-image {
          background-size: cover;
          background-position: center center;
          width: 500px;
          height: 500px;
          margin-bottom: -30px;
          border-radius: 10px;
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 992px) {
    .about .container .about__content .col-image {
      background-size: cover;
      background-position: center center;
      width: 400px !important;
      height: 400px !important;
      margin-bottom: -39px;
    }
    .about .container .about__content #content-1 {
      margin-bottom: -100px;
    }
    .about .container .about__content #content-2 {
      margin-bottom: -100px;
    }
    .about .container .about__content #content-3 {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 768px) and (min-width: 640px) {
    .grid-flex {
      height: 50em !important;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      grid-gap: 1.4rem !important;
    }
    .grid-flex:nth-child(1) {
      grid-gap: 0rem !important;
      .col-text {
        margin-top: -15rem !important;
      }
    }
    .grid-flex:nth-child(2) {
      grid-gap: 1.4rem !important;
      .col-text {
        margin-top: -8rem !important;
      }
    }
    .grid-flex:nth-child(3) {
      grid-gap: 1.4rem !important;
      .col-text {
        margin-top: -8rem !important;
      }
    }
    .col {
      order: vertical;
    }
    .col-text div p {
      padding: 0em !important;
      margin: 0 !important;
    }
    .col-left {
      -webkit-box-ordinal-group: 0;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0 !important;
    }

    .col-text div p {
      padding: 1em;
    }
    .Aligner-item {
      width: 90%;
    }
    .about__content {
      margin-top: 18.5rem !important;
    }
    .about .container .about__content section {
      margin-left: 5% !important;
      margin-right: 5% !important;
      width: 90% !important;
    }
    .about .container .about__content .col-image {
      background-size: cover;
      background-position: center center;
      width: 100% !important;
      height: 100% !important;
      margin-bottom: -30px;
    }
    hr {
      display: none;
    }
    .about .container .about__content #content-1 {
      /* margin-bottom: -269px; */
      margin-top: 18rem !important;
      margin-bottom: 0rem !important;
    }
  }
  @media only screen and (max-width: 992px) and (min-width: 768px) {
    .grid-flex {
      height: 50em !important;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      grid-gap: 1.4rem !important;
    }
    .grid-flex:nth-child(1) {
      .col-text {
        margin-top: -15rem !important;
      }
    }
    .grid-flex:nth-child(2) {
      margin-top: -8rem !important;
    }
    .grid-flex:nth-child(3) {
      margin-top: -8rem !important;
    }
    .col {
      order: vertical;
    }
    .col-left {
      -webkit-box-ordinal-group: 0;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0 !important;
    }

    .col-text div p {
      padding: 1em;
    }
    .Aligner-item {
      width: 90%;
    }
    .about__content {
      margin-top: 18.5rem !important;
    }
    .about .container .about__content section {
      margin-left: 5% !important;
      margin-right: 5% !important;
      width: 90% !important;
    }
    .about .container .about__content .col-image {
      background-size: cover;
      background-position: center center;
      width: 90% !important;
      height: 100% !important;
      margin-bottom: -30px;
    }
    hr {
      display: none;
    }
  }
  @media only screen and (max-width: 425px) and (min-width: 320px) {
    .grid-flex {
      height: 50em !important;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      flex-direction: column !important;
      align-items: center !important;

      grid-gap: 1.4rem !important;
    }
    .grid-flex:nth-child(1) {
      padding-top: 0 !important;
      .col-text {
        margin-top: -15rem !important;
      }
    }
    .grid-flex:nth-child(2) {
      margin-top: -8rem !important;
      grid-gap: 5.4rem !important;
    }
    .grid-flex:nth-child(3) {
      margin-top: -8rem !important;
      grid-gap: 4.4rem !important;
    }
    .col {
      order: vertical;
    }
    .col-left {
      -webkit-box-ordinal-group: 0;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0 !important;
    }
    .about .container .about__banner .banner-buttons button {
      margin: 1rem 0.5rem 1rem 0.5rem;
      background: #d5fafc;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 80px;
      width: 10.5rem !important;
      height: 3.5rem !important;
      text-align: center;
    }
    .col-text div p {
      padding: 0 !important;
    }
    .Aligner-item {
      width: 90%;
      ul {
        padding-left: 0rem !important;
      }
      h2 {
        padding-left: 0rem !important;
      }
    }
    .about__content {
      margin-top: 18.5rem !important;
    }
    .about .container .about__content {
      margin-top: 6.5rem !important;
      section {
        margin-left: 5% !important;
        margin-right: 5% !important;
        width: 90% !important;
      }
    }
    .about .container .about__content .col-image {
      background-size: cover;
      background-position: center center;
      width: 100% !important;
      height: 100% !important;
      margin-bottom: -30px;
    }
    hr {
      display: none;
    }
    .about .container .about__banner .about__banner-head {
      top: 0;
      left: 0;
      margin: auto;
      align-items: center !important;
      height: 100%;
      width: 90% !important;
      padding-top: 2rem;
      text-align: center;
      span {
        line-height: 2rem !important;
      }
    }
    .about .container .about__banner .banner-image img {
      width: 90%;
      height: 250px;
      object-fit: cover;
    }
  }
  @media only screen and (max-width: 640px) and (min-width: 425px) {
    .grid-flex {
      height: 50em !important;
      display: -webkit-flex;
      -webkit-flex-direction: column;
      flex-direction: column !important;
      align-items: center !important;
      width: 90% !important;
      margin: auto;
      grid-gap: 0rem !important;
    }
    .grid-flex:nth-child(1) {
      .col-text {
        margin-top: -15rem !important;
      }
    }
    .grid-flex:nth-child(2) {
      margin-top: -8rem !important;
      grid-gap: 5.4rem !important;
    }
    .grid-flex:nth-child(3) {
      margin-top: -8rem !important;
      grid-gap: 4.4rem !important;
    }
    .col {
      order: vertical;
    }
    .col-left {
      -webkit-box-ordinal-group: 0;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0 !important;
    }
    .about .container .about__banner .banner-buttons button {
      margin: 1rem 0.5rem 1rem 0.5rem;
      background: #d5fafc;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 80px;
      width: 10.5rem !important;
      height: 3.5rem !important;
      text-align: center;
    }
    .col-text div p {
      padding: 1em;
    }
    .Aligner-item {
      width: 90%;
    }
    .about__content {
      margin-top: 18.5rem !important;
      .Aligner-item {
        ul,
        h2 {
          padding-left: 1rem !important;
        }
      }
    }
    .about .container .about__content {
      margin-top: 6.5rem !important;
      section {
        margin-left: 5% !important;
        margin-right: 5% !important;
        width: 90% !important;
      }
    }
    .about .container .about__content .col-image {
      background-size: cover;
      background-position: center center;
      width: 95% !important;
      height: 100% !important;
      margin-bottom: -30px;
    }
    hr {
      display: none;
    }
    .about .container .about__banner .about__banner-head {
      top: 0;
      left: 0;
      margin: auto;
      align-items: center !important;
      height: 100%;
      width: 90% !important;
      padding-top: 2rem;
      text-align: center;
      span {
        line-height: 2rem !important;
      }
    }
    .about .container .about__banner .banner-image img {
      width: 95%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

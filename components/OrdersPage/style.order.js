import styled from "styled-components";
import variables from "../../styles/variables";
export default styled.div`
  .container {
    display: flex;
    grid-gap: 5%;
    width: 95%;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    flex-direction: column;

    margin: auto;
    margin-top: 5rem;
    .orders-view {
      display: flex;
      grid-gap: 3rem;
      .right-side {
        .order-item {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .order-status {
            display: flex;
          }
          .order__card {
            width: 450px;
            height: 165px;
            background-color: #ebebeb;
            align-items: center;
            display: flex;
            grid-gap: 1.5rem;
            position: relative;
            .order__card-image {
              width: 144px;
              height: 124px;
              background-color: ${variables.primary_color};
              img {
                background-position: center;
                object-fit: cover;
                width: 100%;
                height: 100%;
              }
            }
            .order__card-content {
              display: flex;
              flex-direction: column;
              h3 {
                text-transform: uppercase;
                font-size: 1rem;
              }
            }
            .app {
              position: absolute;
              height: 150px;
              width: 150px;
              left: 25px;
              top: 25px;
              border-radius: 50%;
              background: linear-gradient(#fd55c6, #ac3afe);
            }

            .cloud {
              position: absolute;
              height: 40px;
              width: 100px;
              left: 25px;
              top: 65px;
              border-radius: 20px;
              background: #fff;
            }

            .bubble-1 {
              position: absolute;
              height: 40px;
              width: 40px;
              top: -5px;
              border-radius: 50%;
              background: #fff;
            }

            .bubble-2 {
              position: absolute;
              height: 55px;
              width: 55px;
              left: 15px;
              top: -30px;
              border-radius: 50%;
              background: #fff;
            }

            .bubble-3 {
              position: absolute;
              height: 30px;
              width: 30px;
              left: 60px;
              top: -15px;
              border-radius: 50%;
              background: #fff;
            }

            .arrow {
              position: absolute;
              height: 17px;
              width: 15px;
              left: 42px;
              top: -20px;
              border-radius: 2px 2px 0 0;
              background: #fd55c6;
              animation: download 2s linear infinite;
            }

            .tip {
              position: absolute;
              height: 20px;
              width: 35px;
              left: -10px;
              top: 15px;
              background: #fd55c6;
              -webkit-clip-path: polygon(0 0, 50% 100%, 100% 0);
              clip-path: polygon(0 0, 50% 100%, 100% 0);
            }

            .tray {
              position: absolute;
              height: 5px;
              width: 35px;
              left: 57px;
              top: 95px;
              border-radius: 2px;
              background: #fd55c6;
            }

            /* Animations */
            @keyframes download {
              0% {
                top: -20px;
                opacity: 1;
              }
              50% {
                top: -10px;
                opacity: 0.7;
              }
              100% {
                top: 1px;
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
`;

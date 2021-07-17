import React from "react";
import Navigation from "../BaseComponent/Navigation";
import OrderWapper from "./style.order";
const OrdersPage = () => {
  return (
    <OrderWapper>
      <div className="container">
        <div className="top-section">top section</div>
        <div className="orders-view">
          <Navigation />

          <div className="right-side">
            <div className="order-item">
              <div className="order-status">
                <div className="first-step">1</div>
                <div className="current-step">2</div>
              </div>
              <div className="order__card">
                <div className="order__card-image">
                  <img src="/kitAssets/cover.png" />
                </div>
                <div className="order__card-content">
                  <h3>mygiene grooming kit</h3>
                  <span>$150.00 USD</span>
                  <span>Quantity : 1</span>
                </div>
                <div class="app">
                  <div class="cloud">
                    <div class="arrow">
                      <div class="tip"></div>
                    </div>
                  </div>
                  <div class="tray"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderWapper>
  );
};

export default OrdersPage;

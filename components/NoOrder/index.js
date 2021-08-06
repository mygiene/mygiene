import Link from "next/link";
import React from "react";
import NoOrderWrapper from "./style.noorder";
const NoOrder = () => {
  return (
    <NoOrderWrapper>
      <div className="noorder">
        <div className="noorder-image">
          <img src="/noorder/Beep.png" />
        </div>
        <div className="tagline">
          <span>You haven’t placed any order yet!</span>
        </div>
        <div className="kit-button">
          <Link href="/kit">
            <a>
              <span>Start Shopping</span>
            </a>
          </Link>
        </div>
      </div>
    </NoOrderWrapper>
  );
};

export default NoOrder;

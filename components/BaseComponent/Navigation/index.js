import { useRouter } from "next/router";
import React from "react";
import NavigationWrapper from "./style.navigation";
const Navigation = () => {
  const activeLink = useRouter().pathname;
  return (
    <NavigationWrapper>
      <div className="navigation">
        <ul>
          <li className={activeLink === "/terms" ? "active" : ""}>
            <a href="/terms">
              <div>1</div> <span>Terms of Service</span>
            </a>
          </li>
          <li className={activeLink === "/refund" ? "active" : ""}>
            <a href="/refund">
              <div>2</div>
              <span>Returns & Refund</span>
            </a>
          </li>
          <li className={activeLink === "/privacy" ? "active" : ""}>
            <a href="/privacy">
              <div>3</div>
              <span>Privacy Policy</span>
            </a>
          </li>
        </ul>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;

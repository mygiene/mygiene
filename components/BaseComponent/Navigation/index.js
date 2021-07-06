import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import NavigationWrapper from "./style.navigation";
const Navigation = () => {
  const activeLink = useRouter().pathname;
  return (
    <NavigationWrapper>
      <div className="navigation">
        <ul>
          <li className={activeLink === "/terms" ? "active" : ""}>
            <Link href="/terms">
              <a>
                <div>1</div> <span>Terms of Service</span>
              </a>
            </Link>
          </li>
          <li className={activeLink === "/refund" ? "active" : ""}>
            <Link href="/refund">
              <a>
                <div>2</div>
                <span>Returns & Refund</span>
              </a>
            </Link>
          </li>
          <li className={activeLink === "/privacy" ? "active" : ""}>
            <Link href="/privacy">
              <a>
                <div>3</div>
                <span>Privacy Policy</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </NavigationWrapper>
  );
};

export default Navigation;

import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import NavigationWrapper from "./style.userNavigation";
const UserNavigation = () => {
  const activeLink = useRouter().pathname;
  return (
    <NavigationWrapper>
      <div className="navigation">
        <ul>
          <li className={activeLink === "/orders" ? "active" : ""}>
            <Link href="/orders">
              <a>
                <span>Orders</span>
              </a>
            </Link>
          </li>
          <li className={activeLink === "/profile" ? "active" : ""}>
            <Link href="/profile">
              <a>
                <span>Profile</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </NavigationWrapper>
  );
};

export default UserNavigation;

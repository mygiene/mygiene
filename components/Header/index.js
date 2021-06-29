import Link from "next/link";
import HeaderWrapper, { ModalWrapper } from "./styles.header";
import { FaIcon } from "../BaseComponent/FaIcon";
import { useState } from "react";

const NavLinks = [
  { name: "Home", link: "/", icon: "" },
  { name: "About Us", link: "/about-us", icon: "" },
  { name: "Kit", link: "/kit", icon: "" },
  { name: "Contact Us", link: "/contact-us", icon: "" },
  { name: "", link: "", icon: "/headerAssets/profile-icon.png" },
  { name: "", link: "/cart", icon: "headerAssets/add-to-basket.png" },
];

export const Modal = ({ isOpen, activeLink, closeOnClick }) => {
  if (isOpen)
    return (
      <ModalWrapper>
        <div className="list">
          {NavLinks.map((m) => {
            if (m.name)
              return (
                <li className={activeLink === m.link ? "active" : ""}>
                  <Link href={m.link}>
                    <a onClick={closeOnClick}>{m.name}</a>
                  </Link>
                </li>
              );
            else if (m.link)
              return (
                <li>
                  <Link href={m.link}>
                    <a onClick={closeOnClick}>
                      <img src={m.icon} />
                    </a>
                  </Link>
                </li>
              );
          })}
        </div>
      </ModalWrapper>
    );
  return <></>;
};

export const Header = ({ activeLink }) => {
  const [isopen, setisopen] = useState(false);
  function toggle() {
    setisopen((s) => !s);
  }
  console.log(isopen);
  function onProfileClick() {}
  return (
    <HeaderWrapper>
      <div className="nav-outer-block">
        <div className="logo">
          <h3>LOGO</h3>
        </div>
        <div className="nav-list">
          <ul>
            {NavLinks.map((m, i) => {
              if (m.name)
                return (
                  <li className={activeLink === m.link ? "active" : ""}>
                    <Link href={m.link}>{m.name}</Link>
                  </li>
                );
              else if (m.link)
                return (
                  <li>
                    <Link href={m.link}>
                      <img src={m.icon} />
                    </Link>
                  </li>
                );
              else
                return (
                  <li>
                    <a onClick={onProfileClick}>
                      <img src={m.icon} />
                    </a>
                  </li>
                );
            })}
            <li>
              <FaIcon
                onClick={toggle}
                className={isopen ? "fa-window-close-o" : "fa-bars"}
              />
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isopen} activeLink={activeLink} closeOnClick={toggle} />
    </HeaderWrapper>
  );
};

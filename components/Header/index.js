import Link from "next/link";
import HeaderWrapper, { DropdownWrapper, ModalWrapper } from "./styles.header";
import { FaIcon } from "../BaseComponent/FaIcon";
import { useState, useContext } from "react";
import { StoreContext } from "../../store";
import { auth } from "../../firebase/utils";
import Router from "next/router";
import { setCurrentUser } from "../../store/user/userActions";
import useWindowSize from "../../util/windowSize";
import { toast } from "react-toastify";

const NavLinks = [
  { name: "Home", link: "/", icon: "" },
  { name: "About Us", link: "/about-us", icon: "" },
  { name: "Kit", link: "/kit", icon: "" },
  { name: "Contact Us", link: "/contact-us", icon: "" },
  {
    name: "",
    link: "",
    icon: "/headerAssets/profile-icon.png",
  },
  { name: "", link: "/cart", icon: "headerAssets/add-to-basket.png" },
];

export const Dropdown = ({ show, closeOnClick, isLoggedIn }) => {
  const [, dispatch] = useContext(StoreContext);
  function logMeOut() {
    auth.signOut().then((r) => {
      closeOnClick();
      dispatch(setCurrentUser(null));
      Router.push("/");
      toast.success("Bye, see you later 👋🏻");
    });
  }
  if (isLoggedIn && show)
    return (
      <DropdownWrapper>
        <div className="dropdown-outer">
          <ul>
            <li>
              <Link href="/profile">
                <a onClick={closeOnClick}>My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/orders">
                <a onClick={closeOnClick}>Orders</a>
              </Link>
            </li>
            <li>
              <a onClick={logMeOut}>Logout</a>
            </li>
          </ul>
        </div>
      </DropdownWrapper>
    );
  return <></>;
};

export const Modal = ({ isOpen, activeLink, closeOnClick }) => {
  const windowSize = useWindowSize();
  if (isOpen && windowSize.width < 640)
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
  const [show, setshow] = useState(false);
  const [state] = useContext(StoreContext);
  const isLoggedIn = state.currentUser;
  console.log({ isLoggedIn });
  function toggle() {
    setisopen((s) => !s);
  }

  function getNameInitials() {
    let fullName, fName, lName, initials;
    if (isLoggedIn) {
      fullName = isLoggedIn?.displayName;
      console.log(fullName);

      let nameArr = fullName.split(" ").filter(Boolean);
      fName = nameArr[0][0].toUpperCase();
      lName = nameArr[1][0].toUpperCase();
    }
    initials = fName + lName;
    return initials;
  }
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
                      <>
                        {m.link === "/cart" && (
                          <div className="product-counter">1</div>
                        )}
                        <img src={m.icon} />
                      </>
                    </Link>
                  </li>
                );
              else
                return (
                  <li>
                    {isLoggedIn ? (
                      <a onClick={() => setshow((s) => !s)}>
                        <div className="circle">
                          {getNameInitials() || "NU"}
                        </div>
                      </a>
                    ) : (
                      <Link href="/login">
                        <img src={m.icon} />
                      </Link>
                    )}
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
      <Dropdown
        show={show}
        isLoggedIn={isLoggedIn}
        closeOnClick={() => setshow((s) => !s)}
      />
    </HeaderWrapper>
  );
};

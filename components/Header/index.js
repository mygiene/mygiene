import Link from "next/link";
import HeaderWrapper, { DropdownWrapper, ModalWrapper } from "./styles.header";
import { FaIcon } from "../BaseComponent/FaIcon";
import { useState, useContext } from "react";
import { StoreContext } from "../../store";
import { auth } from "../../firebase/utils";
import Router, { useRouter } from "next/router";
import { setCurrentUser } from "../../store/user/userActions";
import useWindowSize from "../../util/windowSize";
import { toast } from "react-toastify";
import { AuthContext, protectedRoutes } from "../auth/auth";

// const RemoveHeader = [""];
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
  { name: "", link: "/cart", icon: "/headerAssets/add-to-basket.png" },
];

export const Dropdown = ({ show, closeOnClick, isLoggedIn }) => {
  const [, , , setCartItems] = useContext(StoreContext);
  const [, dispatch] = useContext(StoreContext);
  const router = useRouter();
  function logMeOut() {
    auth
      .signOut()
      .then(() => {
        closeOnClick();

        // set cart to empty
        localStorage.setItem("cart", null);
        setCartItems(null);

        // set user to null
        dispatch(setCurrentUser(null));
        if (protectedRoutes.includes(router.pathname)) Router.push("/");
        toast.success("See you soon 👋🏻");
      })
      .catch((err) => console.log("Error"));
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
                      <img src={m.icon} alt="header-link" />
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

export const Header = () => {
  const [isopen, setisopen] = useState(false);
  const [show, setshow] = useState(false);
  const activeLink = useRouter().pathname;
  const { authState } = useContext(AuthContext);
  const isLoggedIn = authState.user;
  const [, , cartItems] = useContext(StoreContext);
  function toggle() {
    setisopen((s) => !s);
  }

  function getNameInitials() {
    let fullName, fName, lName, initials;
    if (isLoggedIn) {
      fullName = isLoggedIn?.displayName || "New User";
      let nameArr = fullName.split(" ").filter(Boolean);
      fName = nameArr[0][0].toUpperCase() || "";
      lName = nameArr?.[1]?.[0]?.toUpperCase?.() || "";
    }
    initials = fName + lName;
    return initials;
  }
  // if (RemoveHeader.includes(useRouter().pathname)) {
  //   return <></>;
  // }
  return (
    <HeaderWrapper>
      <div className="nav-outer-block">
        <div className="logo">
          <Link href="/">
            <a href="/">
              <h2>mygiene</h2>
            </a>
          </Link>
        </div>
        <div className="nav-list">
          <ul>
            {/* <li>
              <Link href="/profile">profile</Link>
            </li> */}
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
                      <a>
                        {m.link === "/cart" && cartItems && (
                          <div className="product-counter">{cartItems.qt}</div>
                        )}
                        <img src={m.icon} alt="cart-counter" />
                      </a>
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
                        <img src={m.icon} alt="login" />
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

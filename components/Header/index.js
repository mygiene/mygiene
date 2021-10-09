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

const RemoveHeader = ["/success", "/payment-details"];
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

const AdminLink = [
  { name: "Preview Kit", link: "/kit", icon: "" },
  { name: "Users", link: "/admin/user-list", icon: "" },
  { name: "Orders", link: "/admin/orders-list", icon: "" },
  { name: "Manage Product", link: "/admin/manage-product", icon: "" },
  {
    name: "",
    link: "",
    icon: "/headerAssets/profile-icon.png",
  },
  { name: "Home", link: "/", icon: "" },
];

const Dropdown = ({ show, closeOnClick, user, isAdmin }) => {
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
  if (user && show && !isAdmin)
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
  else if (isAdmin && show)
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
              <a onClick={logMeOut}>Logout</a>
            </li>
          </ul>
        </div>
      </DropdownWrapper>
    );
  return <></>;
};

const Modal = ({ isOpen, isAdmin, activeLink, closeOnClick }) => {
  const windowSize = useWindowSize();
  if (isOpen && windowSize.width < 640)
    return (
      <ModalWrapper>
        <div className="list">
          {(isAdmin ? [...AdminLink] : [...NavLinks]).map((m) => {
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
  const {
    authState: { user, isAdmin },
  } = useContext(AuthContext);
  const [, , cartItems] = useContext(StoreContext);
  function toggle() {
    setisopen((s) => !s);
  }

  function getNameInitials() {
    let fullName, fName, lName, initials;
    if (user?.displayName) {
      fullName = user?.displayName;
      let nameArr = fullName.split(" ").filter(Boolean);
      fName = nameArr[0][0].toUpperCase() || "";
      lName = nameArr?.[1]?.[0]?.toUpperCase?.() || "";
      initials = fName + lName;
    } else {
      initials = "";
    }
    return initials;
  }
  if (RemoveHeader.includes(useRouter().pathname)) {
    return <></>;
  }
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
            {(isAdmin ? [...AdminLink] : [...NavLinks]).map((m, i) => {
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
                        {m.link === "/cart" && cartItems?.qt && (
                          <div className="product-counter">{cartItems?.qt}</div>
                        )}
                        <img src={m.icon} alt="cart-counter" />
                      </a>
                    </Link>
                  </li>
                );
              else
                return (
                  <li>
                    {user ? (
                      <a onClick={() => setshow((s) => !s)}>
                        <div className="circle">{getNameInitials()}</div>
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
      <Modal
        isOpen={isopen}
        isAdmin={isAdmin}
        activeLink={activeLink}
        closeOnClick={toggle}
      />
      <Dropdown
        show={show}
        isAdmin={isAdmin}
        user={user}
        closeOnClick={() => setshow((s) => !s)}
      />
    </HeaderWrapper>
  );
};

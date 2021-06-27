import { auth } from "../../firebase/utils";

export const Layout = ({ children }) => {
  function signout() {
    auth
      .signOut()
      .then((r) => console.log("signed out"))
      .catch((err) => console.log({ err }));
  }
  return (
    <div className="layout">
      <div className="header">
        <button onClick={signout}>LOGOUT</button>
      </div>
      {children}
      <div className="footer">FOOTER</div>
    </div>
  );
};

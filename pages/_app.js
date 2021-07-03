import { AuthProvider } from "../components/auth/auth";
import { Layout } from "../components/layout/layout";
import Store, { StoreContext } from "../store";
import "../styles/globals.scss";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/utils";

const ToastContainer = dynamic(
  () => import("react-toastify").then((x) => x.ToastContainer),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps, loggedIn }) {
  console.log({ loggedIn });
  return (
    <>
      <Store>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </Store>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  let loggedIn = false;
  const { pathname } = ctx;
  auth.onAuthStateChanged((userAuth) => {
    console.log({ userAuth });
    if (userAuth) {
      loggedIn = true;
    } else {
      loggedIn = false;
    }
  });
  return { loggedIn };
};
export default MyApp;

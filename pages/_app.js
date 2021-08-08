import { AuthProvider } from "../components/auth/auth";
import { Layout } from "../components/layout/layout";
import Store, { StoreContext } from "../store";
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/utils";

// global css
import "../styles/globals.scss";

// external dependency css imports
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-modal/styles.css";
import "react-vertical-timeline-component/style.min.css";

const ToastContainer = dynamic(
  () => import("react-toastify").then((x) => x.ToastContainer),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
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

export default MyApp;

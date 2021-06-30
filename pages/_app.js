import { AuthProvider } from "../components/auth/auth";
import { Layout } from "../components/layout/layout";
import Store from "../store";
import "../styles/globals.scss";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { IsCSR } from "../util/common";
import { auth, handleUserProfile } from "../firebase/utils";
import router from "next/router";

const ToastContainer = dynamic(
  () => import("react-toastify").then((x) => x.ToastContainer),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  console.log({ pageProps });
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

const protectedRoutes = ["/profile", "/orders"];
const publicRoutes = ["/login", "/signup"];

MyApp.getInitialProps = async ({ ctx, Component }) => {
  const pathname = (ctx.req?.url || "").trim();
  let pageProps = {};

  // if (IsCSR) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await handleUserProfile(userAuth);
      userRef.onSnapshot((snapshot) => {
        if (publicRoutes.includes(pathname)) {
          router.push("/");
        } else {
        }
      });
    } else {
      if (protectedRoutes.includes(pathname)) {
        router.push("/login");
      }
    }
  });
  // }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {
    pageProps,
  };
};

export default MyApp;

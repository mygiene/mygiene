import { AuthProvider } from "../components/auth/auth";
import { Layout } from "../components/layout/layout";
import Store from "../store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Store>
  );
}

export default MyApp;

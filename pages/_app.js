import { AuthProvider } from "../components/auth/auth";
import { Layout } from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;

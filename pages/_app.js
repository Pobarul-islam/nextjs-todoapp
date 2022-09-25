import '../styles/globals.css'
import { AuthProvider } from './Context/AuthContext';
import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp

import '../styles/global.css'
import Head from "next/head";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
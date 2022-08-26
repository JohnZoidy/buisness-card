import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);

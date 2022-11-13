import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import { AnimatePresence } from "framer-motion";

interface IMyAppProps extends AppProps {}

function MyApp(props: IMyAppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Speak & Shine</title>
        <meta name="description" content="TODO"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

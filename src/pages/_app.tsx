import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex | Riderize</title>
        <link rel="shortcut icon" href="icon.png" />
        <link rel="apple-touch-icon" href="icon.png" />
        <meta
          name="description"
          content="A simple project starter work to with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;

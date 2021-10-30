import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// styles
import GlobalStyle from "@src/styles/globals";
import theme from "@src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>앱 이름</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

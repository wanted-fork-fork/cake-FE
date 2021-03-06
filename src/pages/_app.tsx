import Head from "next/head";
import type { AppProps } from "next/app";
import styled, { ThemeProvider, css } from "styled-components";

import SafeHydrateHoc from "@src/hooks/safeHydrate.hoc";

// styles
import GlobalStyle from "@src/styles/globals";
import theme, { windowSize } from "@src/styles/theme";
import GlobalFonts from "@src/styles/fonts";
import "../styles/variables.less";
import { useEffect } from "react";

const Container = styled.div`
  ${({ theme: defaultTheme }) => css`
    background-color: ${defaultTheme.color.gray0};
  `}
`;

const Content = styled.div`
  background-color: #fff;
  height: 100vh;
  margin: 0 auto;
  width: ${windowSize.mobile};

  ${({ theme: defaultTheme }) => {
    const { window } = defaultTheme;
    return css`
      ${window.mobile} {
        width: 100vw;
      }
    `;
  }}
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js");
      });
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
        />
        <title>Cake</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <Container>
          <Content>
            <SafeHydrateHoc>
              <Component {...pageProps} />
            </SafeHydrateHoc>
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

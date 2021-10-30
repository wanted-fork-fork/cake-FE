import Head from "next/head";
import type { AppProps } from "next/app";
import styled, { ThemeProvider, css } from "styled-components";

// styles
import GlobalStyle from "@src/styles/globals";
import theme, { size } from "@src/styles/theme";

const Container = styled.div`
  ${({ theme: defaultTheme }) => css`
    background-color: ${defaultTheme.color.gray0};
  `}
`;

const Content = styled.div`
  background-color: #fff;
  height: 100vh;
  margin: 0 auto;
  width: ${size.mobile};

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
        <Container>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

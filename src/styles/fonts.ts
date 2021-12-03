import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    font-style: normal;
    src: url('/fonts/GmarketSans/GmarketSansTTFBold.ttf') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    font-style: normal;
    src: url('/fonts/GmarketSans/GmarketSansTTFMedium.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    font-style: normal;
    src: url('/fonts/GmarketSans/GmarketSansTTFLight.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 100;
    src: url('/fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-display: swap;
  }
`;

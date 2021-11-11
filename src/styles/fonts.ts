import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff2) format('woff2'),
    url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFBold.woff) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFMedium.woff2) format('woff2'),
    url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFMedium.woff) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    font-style: normal;
    src: url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFLight.woff2) format('woff2'),
    url(https://cdn.jsdelivr.net/gh/webfontworld/GmarketSans/GmarketSansTTFLight.woff) format('woff');
    font-display: swap;
  }
  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
    url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
    url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
    url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 100;
    src: local('Spoqa Han Sans Thin'),
    url('./fonts/SpoqaHanSans/SpoqaHanSansNeo-Thin.woff') format('woff');
  }
`;

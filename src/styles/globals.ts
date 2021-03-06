import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    overscroll-behavior-y: contain; // 당겨서 새로고침 막기
    overflow: hidden;
  }
  
  html,
  body {
    -webkit-text-size-adjust: none; // 뷰포트 변경 시 자동 폰트 조절 방지 

    padding: 0;
    margin: 0;
    font-family: 'Spoqa Han Sans', 'sans-serif';
    //font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    //Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #222;

    overscroll-behavior-y: none; // 당겨서 새로고침 막기
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

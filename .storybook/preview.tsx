import { ThemeProvider } from "styled-components";
import theme from "@src/styles/theme";
import GlobalStyle from "@src/styles/globals";
import GlobalFonts from "@src/styles/fonts";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
  Story => [
    <>
      <GlobalStyle />
      <GlobalFonts/>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ]
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  viewport: {
    defaultViewport: "iphoneX",
    viewports: {
      ...MINIMAL_VIEWPORTS,
      iphoneX: {
        name:"iPhone X",
        styles: {
          height:"812px",
          width: "375px",
        },
        type: "mobile"
      },
      mobile1: {
        name: "Small mobile",
        styles: {
          height: "568px",
          width: "320px"
        },
        type: "mobile"
      },
      mobile2: {
        name: "Large mobile",
        styles: {
          height: "896px",
          width: "414px",
          padding: "0"
        },
        type: "mobile"
      }
    }
  }
}
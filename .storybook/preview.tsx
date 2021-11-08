import { ThemeProvider } from "styled-components";
import theme from "@src/styles/theme";
import GlobalStyle from "@src/styles/globals";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
  Story => [
    <>
      <GlobalStyle />
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
    viewports: {
      ...MINIMAL_VIEWPORTS,
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
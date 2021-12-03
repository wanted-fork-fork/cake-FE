import { DefaultTheme } from "styled-components";

export const windowSize = {
  pc: "75em", // 1200px
  tab: "56.25em", // 900px
  mobile: "31.25em", // 500px
  mobileS: "23.125em", // 370px
};

export const FixedX = `calc((100vw - ${windowSize.mobile}) / 2)`;
export const nowWindowSize = `min(100vw, ${windowSize.mobile} - 20px)`;

const theme: DefaultTheme = {
  color: {
    primary: "#fc1150", // custom
    secondary: "#ea0845", // custom
    point: "#F95E66", // custom
    black: "#000000",
    gray5: "#444444",
    gray4: "#a6a29d",
    gray3: "#bdbdbd", // custom
    gray2: "#e9e9e9", // custom
    gray1: "#f6f6f6",
    gray0: "#FAFAFA",
    white: "#FFFFFF",
    success: "#22bb33",
    danger: "#bb2124",
    warning: "#f0ad4e",
    info: "#5bc0de",
  },
  window: {
    pc: `@media only screen and (max-width: ${windowSize.pc})`,
    tab: `@media only screen and (min-width: ${windowSize.mobile})`,
    mobile: `@media only screen and (max-width: ${windowSize.mobile})`,
    mobileS: `@media only screen and (max-width: ${windowSize.mobileS})`,
  },
};

export const Color = {
  mainGradient: `linear-gradient(270deg, ${theme.color.primary} 0%, ${theme.color.point} 100%)`,
};

export const FontSize = {
  MainTitle: "1.5rem",
  MainTitleStrong: "1.563rem",
  SubTitle: "1.125rem",
  Default: "1rem", // 16px
  PrimaryLabel: "1.25rem", // 20px
  SecondaryLabel: "0.8rem",
  PrimaryDescription: "0.875rem", // 14px
  SecondaryDescription: "0.6rem",
  Small: "0.75rem",
};

export const Padding = {
  page: "0 20px",
  pageX: "20px",
};

export const FontFamily = {
  point: "GmarketSans",
  default: "Spoqa Han Sans",
};

export default theme;

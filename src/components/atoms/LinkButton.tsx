import styled from "styled-components";
import theme from "@src/styles/theme";

export type TextButtonStyleProps = {
  color: "gray" | "primary" | "white" | "black";
};

export const TextButton = styled.button<TextButtonStyleProps>`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;

  color: ${({ color }) => {
    switch (color) {
      case "gray":
        return theme.color.gray3;
      case "white":
        return "#fff";
      case "primary":
        return theme.color.primary;
      case "black":
        return theme.color.black;
      default:
        return theme.color.black;
    }
  }};
`;

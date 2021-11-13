import styled from "styled-components";
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

export interface TextButtonStyleProps extends BaseProps {
  color?: "gray" | "primary" | "white" | "black";
}

export const TextButton = styled.button<TextButtonStyleProps>`
  ${BaseStyleProps};

  background: transparent;
  border: none;
  width: 100%;
  text-align: center;
  cursor: pointer;

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

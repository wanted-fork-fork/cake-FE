import styled, { css } from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import theme, { Color } from "@src/styles/theme";

export interface ButtonStyleProps extends BaseProps {
  mb?: string;
  disabled?: boolean;
  filled?: boolean;
  width?: string;
  height?: string;
  color: "gray" | "primary" | "white";
}

const BaseButton = css<ButtonStyleProps>`
  ${BaseStyleProps};

  border: none;
  border-radius: 12px;
  height: ${({ height }) => height || "58px"};
  text-align: center;
  cursor: pointer;
  user-select: none;
`;

export const Button = styled.button<ButtonStyleProps>`
  ${BaseButton};

  background: ${({ color, disabled, filled = true }) => {
    if (disabled) return theme.color.gray2;
    if (!filled) return "#fff";
    switch (color) {
      case "white":
        return "#FFF";
      case "primary":
        return Color.mainGradient;
      default:
        return theme.color.gray2;
    }
  }};
  font-weight: ${({ color }) => {
    switch (color) {
      case "white":
        return 400;
      default:
        return 500;
    }
  }};

  border: ${({ disabled = false, filled = true }) => {
    if (filled || disabled) return "none";
    return `1px solid ${theme.color.primary}`;
  }};

  color: ${({ color, disabled, filled = true }) =>
    color === "primary" && !disabled && filled ? "#fff" : theme.color.black};

  width: ${({ width }) => width || "100%"};
`;

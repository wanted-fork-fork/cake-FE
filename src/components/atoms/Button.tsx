import styled, { css } from "styled-components";
import { BaseProps, BaseStyleProps, LightUnderline } from "@src/styles/common";
import theme, { Color, FontSize } from "@src/styles/theme";

export interface ButtonStyleProps extends BaseProps {
  mb?: string;
  mt?: string;
  disabled?: boolean;
  filled?: boolean;
  width?: string;
  height?: string;
  color?: "gray" | "primary" | "white" | string;
  shape?: "rounded" | "full-rounded";
  textAlign?: "left" | "center";
}

export interface InputLikeButtonStyleProps extends ButtonStyleProps {
  selected?: boolean;
}

export const BaseButton = css<ButtonStyleProps>`
  ${BaseStyleProps};

  border-radius: ${({ shape }) => {
    switch (shape) {
      case "rounded":
        return "12px";
      case "full-rounded":
        return "100px";
      default:
        return "12px";
    }
  }};

  text-align: ${({ textAlign = "center" }) => textAlign};

  border: none;
  height: ${({ height }) => height || "58px"};
  cursor: pointer;
  user-select: none;
`;

export const Button = styled.button<ButtonStyleProps>`
  ${BaseButton};

  background: ${({ color = "gray", disabled, filled = true }) => {
    if (disabled) return theme.color.gray2;
    if (!filled) return "#fff";
    switch (color) {
      case "white":
        return "#FFF";
      case "primary":
        return Color.mainGradient;
      case "gray":
        return theme.color.gray2;
      default:
        return color;
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

export const InputLikeButton = styled.button<InputLikeButtonStyleProps>`
  ${BaseButton};
  ${LightUnderline};
  background-color: transparent;
  font-size: ${FontSize.PrimaryDescription};
  height: auto;

  width: 100%;

  color: ${({ selected = false }) =>
    selected ? theme.color.black : theme.color.gray4};
`;

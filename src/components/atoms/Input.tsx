import styled, { css } from "styled-components";
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

export interface InputStyleProps extends BaseProps {
  shape?: "underline";
}

const BaseInput = css<InputStyleProps>`
  ${BaseStyleProps};
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const DividedInput = styled.input`
  ${BaseInput};
  height: 100%;
  border: none;
  &:not(:first-child) {
    border-top: 1px solid ${theme.color.gray2};
  }
`;

export const UnderlineInput = styled.input<InputStyleProps>`
  ${BaseInput};
  border: none;
  border-bottom: 2px solid ${theme.color.gray3};
  font-weight: 400;
  padding: 15px 10px;

  &:focus {
    border-color: ${theme.color.primary};
  }
`;

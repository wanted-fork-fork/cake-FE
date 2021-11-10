import styled, { css } from "styled-components";

// styles
import { BaseProps, BaseStyleProps, Underline } from "@src/styles/common";
import theme from "@src/styles/theme";

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
  border: none;
  &:not(:first-child) {
    border-top: 1px solid ${theme.color.gray2};
  }
`;

export const UnderlineInput = styled.input<InputStyleProps>`
  ${BaseInput};
  ${Underline};

  &:placeholder-shown {
    border-bottom: 3px solid ${theme.color.gray3};
  }

  &:disabled {
    background: transparent;
    color: ${theme.color.gray5};
  }
`;

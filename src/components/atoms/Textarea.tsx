import styled from "styled-components";
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

export const Textarea = styled.textarea<BaseProps>`
  ${BaseStyleProps};
  width: 100%;
  border-radius: 9px;
  border: 1px solid ${theme.color.primary};
  padding: 8px;
  margin-bottom: 0;

  &:placeholder-shown {
    border: 1px solid ${theme.color.gray3};
  }

  &:focus {
    outline: none;
    border: 1px solid ${theme.color.primary};
  }
`;

export default { Textarea };

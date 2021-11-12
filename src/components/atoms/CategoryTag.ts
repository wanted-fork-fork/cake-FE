import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";
import { BaseButton, ButtonStyleProps } from "@src/components/atoms/Button";

export const CategoryTag = styled.button<ButtonStyleProps>`
  ${BaseButton};
  height: 32px;
  background-color: ${theme.color.gray1};
  font-size: ${FontSize.Small};
  font-weight: 500;
  word-break: keep-all;
  padding: 0 15px;
  border-radius: 20px;
`;

export default {};

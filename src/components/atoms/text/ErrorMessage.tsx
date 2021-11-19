import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

export default {};
export const ErrorMessage = styled.p<BaseProps>`
  margin-bottom: 0;
  ${BaseStyleProps};
  font-size: ${FontSize.PrimaryDescription};
  color: ${theme.color.point};
`;

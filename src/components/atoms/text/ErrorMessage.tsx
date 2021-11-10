import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";

export type ErrorMessageProps = {};

export const ErrorMessage = styled.p<ErrorMessageProps>`
  font-size: ${FontSize.PrimaryDescription};
  color: ${theme.color.black};
`;

import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";

export const Category = styled.span`
  font-size: ${FontSize.Small};
  padding-top: 2px;

  color: ${theme.color.black};
  word-break: keep-all;

  &:not(:last-child) {
    ::after {
      content: ",";
      margin-right: 4px;
    }
  }
`;

export default { Category };

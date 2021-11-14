import styled from "styled-components";
import theme from "@src/styles/theme";

interface DividerProps {
  my?: string;
  mx?: string;
}
export const BoldDivider = styled.hr<DividerProps>`
  border: 4px solid ${theme.color.gray1};
  margin: ${({ my = "0" }) => my} ${({ mx = "0" }) => mx};
`;
export const LightDivider = styled.hr<DividerProps>`
  border: 0.5px solid ${theme.color.gray1};
  margin: ${({ my = "0" }) => my} ${({ mx = "0" }) => mx};
`;

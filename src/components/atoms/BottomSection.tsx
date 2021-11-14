import styled from "styled-components";
import theme, { windowSize } from "@src/styles/theme";

interface BottomProps {
  height?: string;
}
export const BottomSection = styled.div<BottomProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ height }) => height ?? "68px"};
  background: #fff;
  border-top: 1px solid ${theme.color.gray2};
  z-index: 5000;
  ${theme.window.tab} {
    width: ${windowSize.mobile};
    left: auto;
    right: auto;
  }
`;
export default {};

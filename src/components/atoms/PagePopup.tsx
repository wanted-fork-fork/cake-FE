import styled from "styled-components";
import theme, { Padding, windowSize } from "@src/styles/theme";
import { NoScroll } from "@src/styles/common";

export interface ContainerProp {
  visible: boolean;
}

export const PagePopup = styled.div<ContainerProp>`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};

  background-color: #fff;
  z-index: 10000;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${({ visible }) => (visible ? "block" : "none")};

  overflow-y: auto;

  ${NoScroll};

  ${theme.window.tab} {
    width: ${windowSize.mobile};
    margin: auto;
  }
`;

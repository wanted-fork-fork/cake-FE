import styled from "styled-components";

// styles
import theme, { Padding, windowSize } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const Container = styled.div<BaseProps>`
  ${BaseStyleProps};
  background-color: ${theme.color.point};
  height: 100vh;

  padding-top: 20vh;

  @media (max-height: 670px) {
    padding-top: 14vh;
  }
  padding-left: ${Padding.pageX};
  padding-right: ${Padding.pageX};
`;

const ContentsWrap = styled.div<BaseProps>`
  ${BaseStyleProps};

  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BottomWrap = styled.div`
  position: fixed;
  bottom: 30px;
  left: ${Padding.pageX};
  right: ${Padding.pageX};

  ${theme.window.tab} {
    width: calc(${windowSize.mobile} - ${Padding.pageX} * 2);
    left: auto;
    right: auto;
  }
`;

export const GuestMain = {
  Container,
  ContentsWrap,
  BottomWrap,
};

export default {
  Container,
  ContentsWrap,
  BottomWrap,
};

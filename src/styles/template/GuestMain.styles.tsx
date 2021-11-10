import styled from "styled-components";

// styles
import theme, { Padding } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const Container = styled.div<BaseProps>`
  ${BaseStyleProps};
  background-color: ${theme.color.point};
  height: 100vh;
  padding-top: 230px;
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

export const GuestMain = {
  Container,
  ContentsWrap,
};

export default {
  Container,
  ContentsWrap,
};

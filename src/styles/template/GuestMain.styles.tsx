import styled from "styled-components";

// styles
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const Container = styled.div`
  background-color: ${theme.color.point};
  height: 100vh;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

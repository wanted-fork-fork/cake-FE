import styled from "styled-components";

// styles
import theme, { FontSize, MyThemeProps } from "@src/styles/theme";
import { MarginBottom } from "@src/styles/common";

const Container = styled.div`
  background-color: ${theme.color.point};
  height: 100vh;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextButton = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  text-align: center;
  font-size: ${FontSize.Small};
  color: #fff;
`;

const RoundedButton = styled.button<MyThemeProps>`
  ${MarginBottom};

  background: #fff;

  width: 100%;
  height: 58px;

  border: none;
  border-radius: 12px;

  text-align: center;
  font-size: ${FontSize.Default};
  font-weight: 500;

  cursor: pointer;
  user-select: none;
`;

const ContentsWrap = styled.div<MyThemeProps>`
  ${MarginBottom};

  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GuestMain = {
  Container,
  RoundedButton,
  TextButton,
  ContentsWrap,
};

export default {
  Container,
  RoundedButton,
  TextButton,
  ContentsWrap,
};

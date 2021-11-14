import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import styled from "styled-components";
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";
import { useCallback } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Padding.pageX};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 60px;

  z-index: 5000;

  ${theme.window.tab} {
    width: ${windowSize.mobile};
    left: auto;
    right: auto;
  }
`;

const Title = styled.p`
  margin: 0;
  font-size: ${FontSize.Default};
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const S = { Container, Title, IconWrapper };
function TitleHeaderComponent({ title, onBack = null }) {
  const back = useCallback(
    (e) => {
      e.stopPropagation();
      if (onBack) return onBack();
      return window.history.back();
    },
    [onBack],
  );
  return (
    <Container>
      <IconWrapper onClick={back}>
        <LeftArrowIcon />
      </IconWrapper>
      <S.Title>{title}</S.Title>
      <div />
    </Container>
  );
}

export default TitleHeaderComponent;

import Link from "next/link";

import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import styled from "styled-components";
import theme, { FontSize, Padding, windowSize } from "@src/styles/theme";

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
function TitleHeaderComponent({ title, backLink }) {
  return (
    <Container>
      <Link href={backLink}>
        <IconWrapper>
          <LeftArrowIcon />
        </IconWrapper>
      </Link>
      <S.Title>{title}</S.Title>
      <div />
    </Container>
  );
}

export default TitleHeaderComponent;

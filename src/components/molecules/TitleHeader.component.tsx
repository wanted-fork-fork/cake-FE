import Link from "next/link";

import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import styled from "styled-components";
import { FontSize, Padding } from "@src/styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Padding.pageX};
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

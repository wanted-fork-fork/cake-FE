import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import styled from "styled-components";
import theme, {
  FixedX,
  FontSize,
  Padding,
  windowSize,
} from "@src/styles/theme";
import { useCallback } from "react";
import { useRouter } from "next/router";

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
    left: ${FixedX};
    right: ${FixedX};
    margin: 0;
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
  const router = useRouter();

  const back = useCallback(
    (e) => {
      e.stopPropagation();
      if (onBack) onBack();
      else if (
        document.referrer &&
        document.referrer.indexOf(process.env.SITE_DOMAIN) !== -1
      )
        window.history.back();
      else router.push("/");
    },
    [onBack, router],
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

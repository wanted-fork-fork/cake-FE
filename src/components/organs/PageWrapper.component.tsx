import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { BottomSection } from "@src/components/atoms/BottomSection";
import { Button } from "@src/components/atoms/Button";
import styled from "styled-components";
import { NoScroll } from "@src/styles/common";
import { Padding } from "@src/styles/theme";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  overflow: auto;
  height: 100vh;
  ${NoScroll};
`;

const SubmitWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;
function PageWrapperComponent({ title, backLink, button, children }) {
  return (
    <Container>
      <TitleHeaderComponent title={title} backLink={backLink} />
      <div>{children}</div>
      <BottomSection>
        <SubmitWrapper>{button}</SubmitWrapper>
      </BottomSection>
    </Container>
  );
}

export default PageWrapperComponent;

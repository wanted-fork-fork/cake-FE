import styled from "styled-components";

// components
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { BottomSection } from "@src/components/atoms/BottomSection";

// styles
import { NoScroll } from "@src/styles/common";

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
function PageWrapperComponent({ title, button, onBack = null, children }) {
  return (
    <Container>
      <TitleHeaderComponent title={title} onBack={onBack} />
      <div>{children}</div>
      {button && (
        <BottomSection>
          <SubmitWrapper>{button}</SubmitWrapper>
        </BottomSection>
      )}
    </Container>
  );
}

export default PageWrapperComponent;

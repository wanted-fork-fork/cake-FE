import { PagePopup } from "@src/components/atoms/PagePopup";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import styled from "styled-components";
import { FontSize } from "@src/styles/theme";

const ContentsWrapper = styled.div`
  padding-top: 60px;
  overflow-y: auto;
  font-size: ${FontSize.Small};
`;
function TermPopupComponent({ visible, setInvisible, title, children }) {
  return (
    <PagePopup visible={visible}>
      <TitleHeaderComponent title={title} onBack={setInvisible} />
      <ContentsWrapper>{children}</ContentsWrapper>
    </PagePopup>
  );
}

export default TermPopupComponent;

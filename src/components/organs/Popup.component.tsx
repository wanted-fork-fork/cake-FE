import styled from "styled-components";
import { FontSize } from "@src/styles/theme";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  z-index: 9999;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
`;
const contentPadding = { padding: "15px 0 10px 0" };
const Title = styled.h3`
  font-size: ${FontSize.Default};
  margin-bottom: 10px;
`;
const Description = styled.p`
  font-size: ${FontSize.PrimaryDescription};
  margin-bottom: 10px;
`;
function PopupComponent({
  title = "",
  description = "" as string | JSX.Element,
  bottom,
}) {
  return (
    <Wrapper>
      <Modal>
        <div style={contentPadding}>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </div>
        <div>{bottom}</div>
      </Modal>
    </Wrapper>
  );
}

export default PopupComponent;

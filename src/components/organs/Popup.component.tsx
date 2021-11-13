import styled from "styled-components";

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

function PopupComponent({ content, bottom }) {
  return (
    <Wrapper>
      <Modal>
        <div>{content}</div>
        <div>{bottom}</div>
      </Modal>
    </Wrapper>
  );
}

export default PopupComponent;

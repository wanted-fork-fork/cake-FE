import styled from "styled-components";
import theme, { FixedX } from "@src/styles/theme";

const Wrapper = styled.button`
  position: fixed;
  right: 20px;
  bottom: 100px;
  box-shadow: 2px 2px 4px -1px #00000040;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  cursor: pointer;
  background-color: ${theme.color.point};
  outline: none;
  border: none;
  &:focus {
    outline: none;
  }

  ${theme.window.tab} {
    right: ${FixedX};
  }
`;

function FloatingButtonComponent({ onClick, icon }) {
  return (
    <Wrapper
      data-testid="floating-create-study-btn"
      type="button"
      onClick={onClick}
    >
      {icon}
    </Wrapper>
  );
}

export default FloatingButtonComponent;

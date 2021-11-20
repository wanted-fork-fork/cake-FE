import EmptyIcon from "@src/components/icon/Empty.icon";
import styled from "styled-components";
import { FontSize } from "@src/styles/theme";

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  svg {
    margin-bottom: 20px;
  }
  p {
    font-size: ${FontSize.PrimaryDescription};
  }
`;

function EmptyComponent({ message }) {
  return (
    <EmptyWrapper>
      <EmptyIcon />
      <p>{message}</p>
    </EmptyWrapper>
  );
}

export default EmptyComponent;

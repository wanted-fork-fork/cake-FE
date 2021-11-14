import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function LoadingComponent() {
  return (
    <Container>
      <LoadingOutlined />
    </Container>
  );
}

export default LoadingComponent;

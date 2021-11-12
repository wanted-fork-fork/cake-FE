import Link from "next/link";
import { Button } from "@src/components/atoms/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  text-align: center;
  padding: 40vh 20px;
`;

function UserMainTemplate() {
  return <Container />;
}

export default UserMainTemplate;

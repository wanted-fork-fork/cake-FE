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
function UserMainTemplate({ email }) {
  return (
    <Container>
      <div>email: {email}</div>
      <Link href="/study/create">
        <a>
          <Button color="primary">스터디 생성</Button>
        </a>
      </Link>
      <Link href="/logout">
        <a>
          <Button color="primary">로그아웃</Button>
        </a>
      </Link>
    </Container>
  );
}

export default UserMainTemplate;

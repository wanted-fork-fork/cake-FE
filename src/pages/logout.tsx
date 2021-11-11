import { useEffect } from "react";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function LogoutPage() {
  const { userStore } = useStores();
  const router = useRouter();

  useEffect(() => {
    userStore.logout();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router, userStore]);

  return (
    <Container>
      <p>로그아웃 되었습니다.</p>
    </Container>
  );
}

export default LogoutPage;

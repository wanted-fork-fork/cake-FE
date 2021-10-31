import type { NextPage } from "next";
import styled from "styled-components";
import { observer } from "mobx-react";

// stores
import { useStores } from "@src/store/root.store";

// templates
import LoginPageTemplate from "@src/templates/LoginPage.template";
import { FormEvent, useCallback } from "react";
import { LoginDto } from "@src/dto/auth.dto";

const Container = styled.div`
  //background-color: black;
`;

const Home: NextPage = observer(() => {
  const { userStore } = useStores();

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await userStore.login({ ...e.target.value })
  }, []);

  return (
    <Container>
      <LoginPageTemplate onSubmit={onSubmit} />
    </Container>
  );
});

export default Home;

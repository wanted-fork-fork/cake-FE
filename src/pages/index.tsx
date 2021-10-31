import type { NextPage } from "next";
import { FormEvent, useCallback } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

// stores
import { useStores } from "@src/store/root.store";

// templates
import LoginPageTemplate from "@src/templates/LoginPage.template";

const Container = styled.div``;

const Home: NextPage = observer(() => {
  const { userStore } = useStores();

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      await userStore.login({ email, password });
    },
    [userStore],
  );

  return (
    <Container>
      <LoginPageTemplate onSubmit={onSubmit} />
    </Container>
  );
});

export default Home;

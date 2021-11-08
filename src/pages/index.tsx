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
      // @ts-ignore
      const email = e.target.email.value;
      // @ts-ignore
      const password = e.target.password.value;
      await userStore.login({ email, password });
    },
    [userStore],
  );

  const onTest = useCallback(async () => {
    await userStore.test();
  }, [userStore]);

  const onRefresh = useCallback(async () => {
    await userStore.refresh();
  }, [userStore]);

  return (
    <Container>
      <LoginPageTemplate onSubmit={onSubmit} />
      <button type="button" onClick={onTest}>
        test auth
      </button>{" "}
      <button type="button" onClick={onRefresh}>
        test refresh
      </button>
    </Container>
  );
});

export default Home;

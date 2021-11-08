import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

// stores
import { useStores } from "@src/store/root.store";

// hooks
import useForm from "@src/hooks/useForm.hook";

// templates
import LoginPageTemplate, {
  LoginForm,
} from "@src/templates/LoginPage.template";

const Container = styled.div``;

const LoginPage: NextPage = observer(() => {
  const { userStore } = useStores();

  const onSubmit = useCallback(
    async (values) => {
      await userStore.login(values);
    },
    [userStore],
  );

  const { values, handleSubmit, handleChange } = useForm<LoginForm>({
    initialValues: { email: "", password: "" },
    onSubmit,
    validate() {
      return {};
    },
  });

  const onTest = useCallback(async () => {
    await userStore.test();
  }, [userStore]);

  const onRefresh = useCallback(async () => {
    await userStore.refresh();
  }, [userStore]);

  return (
    <Container>
      <LoginPageTemplate
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <button type="button" onClick={onTest}>
        test auth
      </button>{" "}
      <button type="button" onClick={onRefresh}>
        test refresh
      </button>
    </Container>
  );
});
export default LoginPage;

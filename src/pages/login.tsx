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
import { useRouter } from "next/router";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";

const Container = styled.div``;

const LoginPage: NextPage = observer(() => {
  const { userStore } = useStores();
  const router = useRouter();

  const onSubmit = useCallback(
    async (values) => {
      await userStore.login(values);
      router.push("/");
    },
    [router, userStore],
  );

  const { values, handleSubmit, handleChange } = useForm<LoginForm>({
    initialValues: { email: "", password: "" },
    onSubmit,
    validate() {
      return {};
    },
  });

  return (
    <Container>
      <LoginPageTemplate
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  );
});
export default LoginPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.GUEST);

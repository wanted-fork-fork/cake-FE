import LoginPageTemplate, {
  LoginForm,
} from "@src/templates/LoginPage.template";
import useForm from "@src/hooks/useForm.hook";
import { MyThemeProps } from "@src/styles/theme";

export default {
  title: "template/Login",
  component: LoginPageTemplate,
};

const Template = (args) => {
  const { values, handleChange } = useForm<LoginForm>({
    initialValues: { email: "", password: "" },
    onSubmit(v: LoginForm) {
      console.log(v);
    },
    validate(_: LoginForm) {
      return {};
    },
  });
  return (
    <LoginPageTemplate values={values} onChange={handleChange} {...args} />
  );
};

export const Login = Template.bind({});

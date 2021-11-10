import LoginPageTemplate, {
  LoginForm,
} from "@src/templates/LoginPage.template";
import useForm from "@src/hooks/useForm.hook";

export default {
  title: "template/Login",
  component: LoginPageTemplate,
};

const Template = (args) => {
  const { values, handleChange } = useForm<LoginForm>({
    initialValues: { email: "", password: "" },
    onSubmit() {
      return null;
    },
    validate() {
      return {};
    },
  });
  return (
    <LoginPageTemplate values={values} onChange={handleChange} {...args} />
  );
};

export const Login = Template.bind({});

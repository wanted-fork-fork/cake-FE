import LoginPageTemplate from "@src/templates/LoginPage.template";

export default {
  title: "template/Login",
  component: LoginPageTemplate,
};

const Template = (args) => <LoginPageTemplate {...args} />;

export const Login = Template.bind({});

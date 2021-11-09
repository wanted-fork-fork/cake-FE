import SignupPage from "@src/pages/signup";
import SignupPageTemplate, {
  SignupStep,
  SignupTemplateProps,
} from "@src/templates/SignupPage.template";

export default {
  title: "template/Signup",
  component: SignupPage,
};

const Template = (args: SignupTemplateProps) => (
  <SignupPageTemplate {...args} />
);

export const Signup = Template.bind({});
Signup.args = {
  step: SignupStep.CONFIRM_EMAIL,
};

import SignupPage from "@src/pages/signup";
import SignupPageTemplate, {
  SignupTemplateProps,
} from "@src/templates/SignupPage.template";
import { SignupStep } from "@src/constant/enum.constant";

export default {
  title: "template/Signup",
  component: SignupPage,
};

const Template = (args: SignupTemplateProps) => {
  const isStepCompleted = {
    [SignupStep.SELECT_SCHOOL]: true,
    [SignupStep.CONFIRM_EMAIL]: true,
    [SignupStep.PASSWORD_INPUT]: true,
    [SignupStep.DETAILS_INPUT]: true,
    [SignupStep.SELECT_GIVE_CATEGORY]: true,
    [SignupStep.SELECT_TAKE_CATEGORY]: true,
  };
  return <SignupPageTemplate isStepCompleted={isStepCompleted} {...args} />;
};

export const SelectSchoolStep = Template.bind({});
SelectSchoolStep.args = {
  step: SignupStep.SELECT_SCHOOL,
};
export const ConfirmEmailStep = Template.bind({});
ConfirmEmailStep.args = {
  step: SignupStep.CONFIRM_EMAIL,
};
export const PasswordInputStep = Template.bind({});
PasswordInputStep.args = {
  step: SignupStep.PASSWORD_INPUT,
};
export const DetailsInputStep = Template.bind({});
DetailsInputStep.args = {
  step: SignupStep.DETAILS_INPUT,
};
export const SelectCategoryStep = Template.bind({});
SelectCategoryStep.args = {
  step: SignupStep.SELECT_GIVE_CATEGORY,
  onClickNext: null,
  buttonTextOnEmpty: "아직 없어요",
  categoryList: [
    {
      id: 2,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 3,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
    {
      id: 4,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 5,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
    {
      id: 6,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 7,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
    {
      id: 9,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 8,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
  ],
  selectedList: [8],
};

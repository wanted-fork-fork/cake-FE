import styled from "styled-components";

// constant
import { SignupTitleMessages } from "@src/constant/message.constant";

// components
import SelectSchoolStepComponent from "@src/components/organs/signup/SelectSchoolStep.component";
import ConfirmEmailStepComponent from "@src/components/organs/signup/ConfirmEmailStep.component";
import PasswordInputStepComponent from "@src/components/organs/signup/PasswordInputStep.component";
import DetailsInputStepComponent from "@src/components/organs/signup/DetailsInputStep.component";
import SelectCategoryStepComponent from "@src/components/organs/signup/SelectCategoryStep.component";
import { Button } from "@src/components/atoms/Button";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import { BaseMarginBottom, BaseProps } from "@src/styles/common";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

const TitleWrap = styled.div<BaseProps>`
  ${BaseMarginBottom};
  height: 200px;
  padding-top: 160px;
`;

const TitleText = styled.h2<BaseProps>`
  ${BaseMarginBottom};
  font-size: ${FontSize.PrimaryLabel};
  font-weight: 500;
`;
const DescriptionText = styled.p`
  font-size: ${FontSize.PrimaryDescription};
  font-weight: 400;
`;

const ContentWrap = styled.div``;

const BottomWrap = styled.div`
  position: absolute;
  bottom: 60px;
  left: ${Padding.pageX};
  right: ${Padding.pageX};
`;

const S = {
  Container,
  TitleWrap,
  ContentWrap,
  BottomWrap,
  TitleText,
  DescriptionText,
};

export enum SignupStep {
  SELECT_SCHOOL,
  CONFIRM_EMAIL,
  PASSWORD_INPUT,
  DETAILS_INPUT,
  SELECT_GIVE_CATEGORY,
  SELECT_TAKE_CATEGORY,
}

export type SignupTemplateProps = {
  step: SignupStep;
  onClickNext?: () => void;
};

function SignupPageTemplate({
  step = SignupStep.SELECT_SCHOOL,
  onClickNext,
}: SignupTemplateProps) {
  return (
    <S.Container>
      <S.TitleWrap mb="30px">
        <S.TitleText mb="8px">{SignupTitleMessages[step].title}</S.TitleText>
        <S.DescriptionText>
          {SignupTitleMessages[step].description}
        </S.DescriptionText>
      </S.TitleWrap>
      <S.ContentWrap>
        {step === SignupStep.SELECT_SCHOOL && <SelectSchoolStepComponent />}
        {step === SignupStep.CONFIRM_EMAIL && <ConfirmEmailStepComponent />}
        {step === SignupStep.PASSWORD_INPUT && <PasswordInputStepComponent />}
        {step === SignupStep.DETAILS_INPUT && <DetailsInputStepComponent />}
        {step === SignupStep.SELECT_GIVE_CATEGORY && (
          <SelectCategoryStepComponent />
        )}
        {step === SignupStep.SELECT_TAKE_CATEGORY && (
          <SelectCategoryStepComponent />
        )}
      </S.ContentWrap>
      {SignupTitleMessages[step].button && (
        <S.BottomWrap>
          <Button
            type="button"
            color="primary"
            disabled={false}
            onClick={onClickNext}
          >
            {SignupTitleMessages[step].button}
          </Button>
        </S.BottomWrap>
      )}
    </S.Container>
  );
}

export default SignupPageTemplate;

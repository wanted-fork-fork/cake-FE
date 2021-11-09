import styled from "styled-components";
import { useMemo } from "react";

// constant
import { SignupTitleMessages } from "@src/constant/message.constant";
import { Category } from "@src/models/dto/signup.dto";

// components
import SelectSchoolStepComponent from "@src/components/organs/signup/SelectSchoolStep.component";
import ConfirmEmailStepComponent from "@src/components/organs/signup/ConfirmEmailStep.component";
import PasswordInputStepComponent from "@src/components/organs/signup/PasswordInputStep.component";
import DetailsInputStepComponent from "@src/components/organs/signup/DetailsInputStep.component";
import SelectCategoryStepComponent from "@src/components/organs/signup/SelectCategoryStep.component";
import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import { Button } from "@src/components/atoms/Button";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { TextButton } from "@src/components/atoms/LinkButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

const BackWrap = styled.div`
  margin-bottom: 20px;
  width: fit-content;
`;

const TitleWrap = styled.div<BaseProps>`
  ${BaseStyleProps};
`;

const TitleText = styled.h2<BaseProps>`
  ${BaseStyleProps};
  font-size: ${FontSize.PrimaryLabel};
  font-weight: 500;
  word-break: keep-all;
  line-height: ${FontSize.MainTitle};
`;
const DescriptionText = styled.p`
  font-size: ${FontSize.PrimaryDescription};
  font-weight: 400;
  word-break: keep-all;
  line-height: ${FontSize.PrimaryLabel};
`;

const ContentWrap = styled.div``;

const BottomWrap = styled.div`
  position: fixed;
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
  onClickPrev?: () => void;
  categoryList: Category[];
  selectedList: number[];
};

function SignupPageTemplate({
  step = SignupStep.SELECT_SCHOOL,
  categoryList = [],
  selectedList = [],
  onClickNext,
  onClickPrev,
}: SignupTemplateProps) {
  return (
    <S.Container>
      <S.TitleWrap pt="50px" mb="60px">
        <BackWrap>
          <TextButton color="black" onClick={onClickPrev}>
            <LeftArrowIcon />
          </TextButton>
        </BackWrap>
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
          <SelectCategoryStepComponent
            categoryList={categoryList}
            selectedList={selectedList}
          />
        )}
        {step === SignupStep.SELECT_TAKE_CATEGORY && (
          <SelectCategoryStepComponent
            categoryList={categoryList}
            selectedList={selectedList}
          />
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

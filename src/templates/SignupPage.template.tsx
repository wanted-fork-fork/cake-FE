import styled from "styled-components";

// constant
import { SignupTitleMessages } from "@src/constant/message.constant";
import { Univ } from "@src/models/dto/signup.dto";
import { CategoryType, SignupStep } from "@src/constant/enum.constant";

// components
import SelectSchoolStepComponent from "@src/components/organs/signup/SelectSchoolStep.component";
import ConfirmEmailStepComponent from "@src/components/organs/signup/ConfirmEmailStep.component";
import PasswordInputStepComponent from "@src/components/organs/signup/PasswordInputStep.component";
import DetailsInputStepComponent from "@src/components/organs/signup/DetailsInputStep.component";
import SelectCategoryStepComponent from "@src/components/organs/signup/SelectCategoryStep.component";
import SignupCompleteStepComponent from "@src/components/organs/signup/SignupCompleteStep.component";
import LeftArrowIcon from "@src/components/icon/LeftArrow.icon";
import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/TextButton";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: ${Padding.page};
`;

interface BackWrapProp {
  show: boolean;
}

const BackWrap = styled.div<BackWrapProp>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  margin-bottom: 20px;
  width: fit-content;
`;

const HeaderWrap = styled.div<BaseProps>`
  ${BaseStyleProps};
  height: 60px;
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

const S = {
  Container,
  TitleWrap,
  HeaderWrap,
  ContentWrap,
  TitleText,
  DescriptionText,
};

export type SignupTemplateProps = {
  step: SignupStep;
  onClickNext?: () => void;
  onClickPrev?: () => void;
  onCheckConfirmMail?: (email: string) => void;
  onClickReqConfirmMail?: (email: string) => Promise<boolean>;
  onToggleCategory?: (type: CategoryType, id: number) => void;
  selectedUniv: Univ;
  isStepCompleted: object;
};

function SignupPageTemplate({
  step = SignupStep.SELECT_SCHOOL,
  selectedUniv,
  isStepCompleted,
  onClickNext,
  onClickPrev,
  onClickReqConfirmMail,
  onCheckConfirmMail,
  onToggleCategory,
}: SignupTemplateProps) {
  return (
    <S.Container>
      {step === SignupStep.SELECT_SCHOOL && <TitleHeaderComponent title="" />}
      <S.HeaderWrap pt="20px" mb="30px">
        {step !== SignupStep.SELECT_SCHOOL && (
          <BackWrap show={SignupTitleMessages[step].allowBack}>
            <TextButton color="black" onClick={onClickPrev}>
              <LeftArrowIcon />
            </TextButton>
          </BackWrap>
        )}
      </S.HeaderWrap>
      <S.TitleWrap mb="60px">
        <S.TitleText mb="8px">{SignupTitleMessages[step].title}</S.TitleText>
        <S.DescriptionText>
          {SignupTitleMessages[step].description}
        </S.DescriptionText>
      </S.TitleWrap>
      <S.ContentWrap>
        {step === SignupStep.SELECT_SCHOOL && <SelectSchoolStepComponent />}
        {step === SignupStep.CONFIRM_EMAIL && (
          <ConfirmEmailStepComponent
            selectedUniv={selectedUniv}
            onClickReqConfirmMail={onClickReqConfirmMail}
            onCheckConfirmMail={onCheckConfirmMail}
          />
        )}
        {step === SignupStep.PASSWORD_INPUT && <PasswordInputStepComponent />}
        {step === SignupStep.DETAILS_INPUT && <DetailsInputStepComponent />}
        {step === SignupStep.SELECT_GIVE_CATEGORY && (
          <SelectCategoryStepComponent
            type={CategoryType.GIVE}
            onSelect={onToggleCategory}
            onClickNext={onClickNext}
            buttonTextOnEmpty="아직 없어요"
          />
        )}
        {step === SignupStep.SELECT_TAKE_CATEGORY && (
          <SelectCategoryStepComponent
            type={CategoryType.TAKE}
            onSelect={onToggleCategory}
            onClickNext={onClickNext}
            buttonTextOnEmpty="다 좋아요!"
          />
        )}
        {step === SignupStep.COMPLETE_SIGNUP && <SignupCompleteStepComponent />}
      </S.ContentWrap>
      {SignupTitleMessages[step].button && (
        <GuestMain.BottomWrap>
          <Button
            type="button"
            color="primary"
            disabled={!isStepCompleted[step]}
            onClick={onClickNext}
          >
            {SignupTitleMessages[step].button}
          </Button>
        </GuestMain.BottomWrap>
      )}
    </S.Container>
  );
}

export default SignupPageTemplate;

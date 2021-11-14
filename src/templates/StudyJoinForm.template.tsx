import styled from "styled-components";

// components
import { Button } from "@src/components/atoms/Button";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import { LightUnderlineInput } from "@src/components/atoms/Input";
import { Textarea } from "@src/components/atoms/Textarea";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import StudyJoinSuccessModalComponent from "@src/stories/templates/StudyJoinSuccessModal.component";
import useInput from "@src/hooks/useInput.hook";
import { useCallback, useState } from "react";

const ContentsWrapper = styled.div`
  padding: ${Padding.page};
`;

const FormWrapper = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.p<BaseProps>`
  margin-bottom: 0;
  ${BaseStyleProps};
  font-size: ${FontSize.Default};
  font-weight: 500;
  padding-left: 10px;
`;
function StudyJoinFormTemplate({ study, onSubmit }) {
  const { value: contents, handleChange: handleChangeContents } = useInput("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = useCallback(async () => {
    await onSubmit(contents);
    setPopupVisible(true);
  }, [contents, onSubmit]);

  return study ? (
    <PageWrapperComponent
      title="참여 신청"
      backLink="/"
      button={
        <Button
          onClick={handleSubmit}
          color="point"
          height="44px"
          fontSize="small"
          width="100px"
        >
          참여 신청
        </Button>
      }
    >
      <ContentsWrapper>
        <FormWrapper>
          <Label>참여 스터디</Label>
          <LightUnderlineInput placeholder={study.title} disabled />
        </FormWrapper>
        <FormWrapper>
          <Label mb="10px">신청 동기 및 기타 사항</Label>
          <Textarea
            value={contents}
            onChange={handleChangeContents}
            fontSize="small"
            rows={10}
            placeholder="스터디에 대한 관심 및 제안 사항을 입력해주세요!"
          />
        </FormWrapper>
      </ContentsWrapper>
      {popupVisible && <StudyJoinSuccessModalComponent />}
    </PageWrapperComponent>
  ) : (
    <p>loading</p>
  );
}

export default StudyJoinFormTemplate;

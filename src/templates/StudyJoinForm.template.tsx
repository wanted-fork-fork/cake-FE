import { useCallback, useState } from "react";
import styled from "styled-components";

// lib
import { FolderPathType } from "@src/constant/enum.constant";

// components
import { LightUnderlineInput } from "@src/components/atoms/Input";
import { Button } from "@src/components/atoms/Button";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import StudyJoinSuccessModalComponent from "@src/stories/templates/StudyJoinSuccessModal.component";
import MultipleImageUploadComponent from "@src/components/molecules/MultipleImageUpload.component";
import { Textarea } from "@src/components/atoms/Textarea";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const ContentsWrapper = styled.div`
  padding: 40px ${Padding.pageX};
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
function StudyJoinFormTemplate({
  study,
  onSubmit,
  contents,
  handleChangeContents,
  uploaded,
  setUploaded,
}) {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = useCallback(async () => {
    await onSubmit();
    setPopupVisible(true);
  }, [onSubmit]);

  return (
    <PageWrapperComponent
      title="참여 신청"
      button={
        <Button
          data-testid="submit-apply-btn"
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
          <LightUnderlineInput
            placeholder={study ? study.title : ""}
            data-testid="study-title-input"
            disabled
          />
        </FormWrapper>
        <FormWrapper>
          <Label mb="10px">신청 동기 및 기타 사항</Label>
          <Textarea
            data-testid="comment-textarea"
            value={contents}
            onChange={handleChangeContents}
            fontSize="small"
            rows={10}
            placeholder="스터디에 대한 관심 및 제안 사항을 입력해주세요!"
          />
        </FormWrapper>
        <FormWrapper>
          <MultipleImageUploadComponent
            uploaded={uploaded}
            folder={FolderPathType.APPLY}
            setUploaded={setUploaded}
            messageOnEmpty="재능을 어필할 수 있는 사진이 있나요?"
          />
        </FormWrapper>
      </ContentsWrapper>
      {popupVisible && <StudyJoinSuccessModalComponent />}
    </PageWrapperComponent>
  );
}

export default StudyJoinFormTemplate;

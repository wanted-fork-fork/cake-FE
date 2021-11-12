import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { LightUnderlineInput } from "@src/components/atoms/Input";
import Select from "@src/components/atoms/Select";
import styled from "styled-components";
import theme, { Padding } from "@src/styles/theme";
import { Checkbox, DatePicker } from "antd";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import { LightUnderline, NoScroll } from "@src/styles/common";
import { Button, InputLikeButton } from "@src/components/atoms/Button";
import CalendarIcon from "@src/components/icon/Calendar.icon";
import PinIcon from "@src/components/icon/Pin.icon";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  height: 100vh;
  overflow: auto;

  ${NoScroll};
`;
const FormWrapper = styled.form`
  padding: 0 ${Padding.pageX};
  input,
  select {
    margin-top: 5px;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin-top: 5px;
`;
const WithUnderline = styled.div`
  ${LightUnderline};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 9px;
  border: 1px solid ${theme.color.gray3};
  padding: 8px;
`;

const BorderLine = styled.hr`
  border: 4px solid ${theme.color.gray2};
  margin: 20px 0;
`;

const MidLine = styled.hr`
  border: 1px solid ${theme.color.gray3};
  border-radius: 0;
  width: 15px;
`;

const WithPrefixIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 68px;
  background: #fff;
  border-top: 1px solid ${theme.color.gray3};
  z-index: 9999;
`;
const SubmitWrapper = styled.div`
  position: absolute;
  right: ${Padding.pageX};
  top: 10px;
`;
function StudyCreateTemplate() {
  return (
    <Container>
      <TitleHeaderComponent title="스터디 생성" backLink="/" />
      <FormWrapper>
        <LightUnderlineInput placeholder="타이틀 입력" fontSize="small" />
        <Select
          shape="light"
          list={[]}
          idKeyName={undefined}
          labelKeyName={undefined}
          defaultText="모임 형태"
          onSelect={undefined}
        />
        <CategoryWrapper>
          <InputLikeButton color="gray">나의 능력</InputLikeButton>
          <InputLikeButton color="gray">너의 능력</InputLikeButton>
        </CategoryWrapper>
        <CategoryWrapper>
          <WithPrefixIcon>
            <CalendarIcon color={theme.color.gray3} />
            <DatePicker
              suffixIcon={null}
              placeholder="스터디 시작일"
              picker="date"
              bordered={false}
              format="YY.MM.DD"
            />
          </WithPrefixIcon>
          <MidLine />
          <WithPrefixIcon>
            <CalendarIcon color={theme.color.gray3} />
            <DatePicker
              suffixIcon={null}
              placeholder="스터디 종료일"
              picker="date"
              bordered={false}
              format="YY.MM.DD"
            />
          </WithPrefixIcon>
        </CategoryWrapper>
        <WithUnderline>
          <Checkbox>
            <span color={theme.color.gray3}>참가자와 날짜 결정</span>
          </Checkbox>
        </WithUnderline>
        <InputWithSuffixComponent
          input={
            <InputLikeButton color="gray" fontSize="small">
              장소
            </InputLikeButton>
          }
          suffix={<PinIcon />}
        />
        <LightUnderlineInput placeholder="오픈채팅링크" fontSize="small" />
        <LightUnderlineInput placeholder="오픈채팅 비밀번호" fontSize="small" />
      </FormWrapper>
      <BorderLine />
      <FormWrapper>
        <Textarea
          placeholder="상세 내용, 일정 및 유의 사항을 입력해주세요."
          rows={10}
        />
      </FormWrapper>
      <Bottom>
        <SubmitWrapper>
          <Button width="100px" height="44px" color="primary" fontSize="small">
            게시물 작성
          </Button>
        </SubmitWrapper>
      </Bottom>
    </Container>
  );
}

export default StudyCreateTemplate;

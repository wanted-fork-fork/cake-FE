import { useMemo } from "react";
import styled from "styled-components";

// utils
import { getStudyTypeList } from "@src/utils/enum.util";

// components
import CalendarIcon from "@src/components/icon/Calendar.icon";
import { Button } from "@src/components/atoms/Button";
import { LightUnderlineInput } from "@src/components/atoms/Input";
import DatePicker from "@src/components/atoms/DatePicker";
import Select from "@src/components/atoms/Select";
import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";

// styles
import theme, { Padding } from "@src/styles/theme";
import { LightUnderline, NoScroll } from "@src/styles/common";
import AutocompleteCategoryComponent from "@src/components/molecules/AutocompleteCategory.component";

const Container = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  height: 100vh;
  overflow: auto;

  ${NoScroll};
`;
const FormWrapper = styled.div`
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
  padding-top: 8px;
  padding-bottom: 0;
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
function StudyCreateTemplate({
  onSubmit,
  values,
  onChange,
  startDate,
  onChangeStartDate,
  endDate,
  onChangeEndDate,
  selectedMine,
  setSelectedMine,
  selectedYours,
  setSelectedYours,
}) {
  const studyTypeList = useMemo(() => getStudyTypeList(), []);
  return (
    <Container>
      <TitleHeaderComponent title="스터디 생성" backLink="/" />
      <FormWrapper>
        <LightUnderlineInput
          name="title"
          placeholder="타이틀 입력"
          fontSize="small"
          onChange={onChange}
        />
        <Select
          name="type"
          selected={values.type}
          shape="light"
          list={studyTypeList}
          idKeyName="key"
          labelKeyName="value"
          defaultText="모임 형태"
          onSelect={onChange}
        />
        <CategoryWrapper>
          <AutocompleteCategoryComponent
            selected={selectedMine}
            setSelected={setSelectedMine}
            placeholder="나의 능력"
          />
          <AutocompleteCategoryComponent
            selected={selectedYours}
            setSelected={setSelectedYours}
            placeholder="너의 능력"
          />
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
              value={startDate}
              onChange={onChangeStartDate}
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
              value={endDate}
              onChange={onChangeEndDate}
            />
          </WithPrefixIcon>
        </CategoryWrapper>
        <WithUnderline />
        {/* <InputWithSuffixComponent */}
        {/*  input={ */}
        {/*    <InputLikeButton */}
        {/*      type="button" */}
        {/*      color="gray" */}
        {/*      fontSize="small" */}
        {/*      onClick={null} */}
        {/*    > */}
        {/*      장소 */}
        {/*    </InputLikeButton> */}
        {/*  } */}
        {/*  suffix={<PinIcon />} */}
        {/* /> */}
        <LightUnderlineInput
          name="chatRoom"
          placeholder="오픈채팅링크"
          fontSize="small"
          onChange={onChange}
        />
        <LightUnderlineInput
          name="roomPwd"
          placeholder="오픈채팅 비밀번호"
          fontSize="small"
          onChange={onChange}
        />
      </FormWrapper>
      <BorderLine />
      <FormWrapper>
        <Textarea
          name="content"
          placeholder="상세 내용, 일정 및 유의 사항을 입력해주세요."
          rows={10}
          onChange={onChange}
        />
      </FormWrapper>
      <Bottom>
        <SubmitWrapper>
          <Button
            onClick={onSubmit}
            width="100px"
            height="44px"
            color="primary"
            fontSize="small"
          >
            게시물 작성
          </Button>
        </SubmitWrapper>
      </Bottom>
    </Container>
  );
}

export default StudyCreateTemplate;

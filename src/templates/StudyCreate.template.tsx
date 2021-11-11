import TitleHeaderComponent from "@src/components/molecules/TitleHeader.component";
import { LightUnderlineInput } from "@src/components/atoms/Input";
import Select from "@src/components/atoms/Select";
import styled from "styled-components";
import theme, { Padding } from "@src/styles/theme";
import { Checkbox, DatePicker } from "antd";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import SearchIcon from "@src/components/icon/Search.icon";
import { LightUnderline } from "@src/styles/common";

const Container = styled.form`
  padding: 0 ${Padding.pageX};
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  text-align: center;
`;
const WithUnderline = styled.div`
  ${LightUnderline};
  display: flex;
  align-items: center;

  .rc-checkbox {
    vertical-align: center;
    margin-right: 5px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  border-radius: 9px;
  border: 1px solid ${theme.color.gray3};
  padding: 8px;
`;
function StudyCreateTemplate() {
  return (
    <div>
      <TitleHeaderComponent title="스터디 생성" backLink="/" />
      <Container>
        <LightUnderlineInput placeholder="타이틀 입력" fontSize="small" />
        <Select
          shape="light"
          selected={undefined}
          list={[]}
          idKeyName={undefined}
          labelKeyName={undefined}
          defaultText="모임 형태"
          onSelect={undefined}
        />
        <CategoryWrapper>
          <LightUnderlineInput placeholder="나의 능력" fontSize="small" />
          <LightUnderlineInput placeholder="너의 능력" fontSize="small" />
        </CategoryWrapper>
        <CategoryWrapper>
          <DatePicker
            suffixIcon={null}
            placeholder="스터디 시작일"
            picker="date"
            bordered={false}
          />
          <DatePicker
            suffixIcon={null}
            placeholder="스터디 종료일"
            picker="date"
            bordered={false}
          />
        </CategoryWrapper>
        <WithUnderline>
          <Checkbox>참가자와 날짜 결정</Checkbox>
        </WithUnderline>
        <InputWithSuffixComponent
          input={<LightUnderlineInput placeholder="장소" fontSize="small" />}
          suffix={<SearchIcon />}
        />
        <LightUnderlineInput placeholder="오픈채팅링크" fontSize="small" />
        <LightUnderlineInput placeholder="오픈채팅 비밀번호" fontSize="small" />
      </Container>
      <hr />
      <Container>
        <Textarea
          placeholder="상세 내용, 일정 및 유의 사항을 입력해주세요."
          rows={10}
        />
      </Container>
    </div>
  );
}

export default StudyCreateTemplate;

import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import styled from "styled-components";
import theme, { Padding } from "@src/styles/theme";
import { Button } from "@src/components/atoms/Button";
import ColoredSearchIcon from "@src/components/icon/ColoredSearch.icon";
import SelectComponent from "@src/components/atoms/Select";
import { useMemo } from "react";
import { getStudyTypeList } from "@src/utils/enum.util";
import { GuestMain } from "@src/styles/template/GuestMain.styles";

const Wrapper = styled.div`
  padding: 0 ${Padding.pageX};
`;

const SectionWrapper = styled.div`
  margin-bottom: 30px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  h2 {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
const ButtonContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  p {
    margin-bottom: 0;
    color: ${theme.color.gray3};
    font-weight: 400;
  }
`;

function FilteringTemplate() {
  const studyList = useMemo(() => getStudyTypeList(), []);
  return (
    <PageWrapperComponent title="스터디 필터링" button={null}>
      <Wrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h2>나의 재능</h2>
            <span>다른 사람에게 줄 수 있는 재능은?</span>
          </LabelWrapper>
          <Button color="primary" filled={false} shape="full-rounded">
            <ButtonContentsWrapper>
              <p>내가 잘 하는 것은?</p>
              <ColoredSearchIcon />
            </ButtonContentsWrapper>
          </Button>
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h2>배우고 싶은 재능</h2>
            <span>배우고 싶은 재능은?</span>
          </LabelWrapper>
          <Button color="primary" filled={false} shape="full-rounded">
            <ButtonContentsWrapper>
              <p>배우고 싶은 공부, 취미 모두!</p>
              <ColoredSearchIcon />
            </ButtonContentsWrapper>
          </Button>
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h2>몇 명과 함께하고 싶나요?</h2>
          </LabelWrapper>
          <SelectComponent
            iconPosition="25px"
            placeholder="여러명이서, 한 명만?"
            shape="rounded"
            color="primary"
            onSelect={null}
            selected=""
            list={studyList}
            idKeyName="key"
            labelKeyName="value"
          />
        </SectionWrapper>
        <GuestMain.BottomWrap>
          <Button color="primary" width="100%" disabled>
            스터디 검색
          </Button>
        </GuestMain.BottomWrap>
      </Wrapper>
    </PageWrapperComponent>
  );
}

export default FilteringTemplate;

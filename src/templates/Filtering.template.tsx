import { useMemo } from "react";
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import styled from "styled-components";

// lib
import useVisibleHook from "@src/hooks/useVisible.hook";
import { getStudyTypeList } from "@src/utils/enum.util";

// components
import { Button } from "@src/components/atoms/Button";
import { Category } from "@src/components/atoms/Category";
import ColoredSearchIcon from "@src/components/icon/ColoredSearch.icon";
import SelectComponent from "@src/components/atoms/Select";
import CategorySelectDrawerComponent from "@src/components/organs/CategorySelectDrawer.component";

// styles
import { GuestMain } from "@src/styles/template/GuestMain.styles";
import theme, { FontSize, Padding } from "@src/styles/theme";

const Wrapper = styled.div`
  padding: 20px ${Padding.pageX} 0;
`;

const SectionWrapper = styled.div`
  margin-bottom: 30px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  h2 {
    margin-bottom: 0;
    margin-right: 10px;
  }
  span {
    margin-left: 15px;
    font-size: ${FontSize.Small};
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

function FilteringTemplate({
  selectedMine,
  setSelectedMine,
  selectedYours,
  setSelectedYours,
  studyType,
  setStudyType,
  allowSearch,
  onClickSearch,
}) {
  const studyList = useMemo(() => getStudyTypeList(), []);
  const [mineVisible, setMineVisible, setMineInvisible] = useVisibleHook(false);
  const [yoursVisible, setYourVisible, setYourInvisible] =
    useVisibleHook(false);

  const myCategoryDom = useMemo(
    () =>
      selectedMine.length === 0 ? (
        <p>내가 잘 하는 것은?</p>
      ) : (
        <div>
          {selectedMine.map((x) => (
            <Category key={x.id}>{x.name}</Category>
          ))}
        </div>
      ),
    [selectedMine],
  );

  const yourCategoryDom = useMemo(
    () =>
      selectedYours.length === 0 ? (
        <p>배우고 싶은 공부, 취미 모두!</p>
      ) : (
        <div>
          {selectedYours.map((x) => (
            <Category key={x.id}>{x.name}</Category>
          ))}
        </div>
      ),
    [selectedYours],
  );

  return (
    <PageWrapperComponent title="스터디 필터링" button={null}>
      <CategorySelectDrawerComponent
        title="자신 있는 재능을 선택해주세요."
        selectedList={selectedMine}
        setSelectedList={setSelectedMine}
        buttonTextOnEmpty="아직 없어요"
        onClose={setMineInvisible}
        visible={mineVisible}
        multiple={false}
      />
      <CategorySelectDrawerComponent
        title="관심 있거나 배우고 싶은 주제를 선택해주세요."
        selectedList={selectedYours}
        setSelectedList={setSelectedYours}
        buttonTextOnEmpty="다 좋아요!"
        onClose={setYourInvisible}
        visible={yoursVisible}
        multiple={false}
      />

      <Wrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h3>Give</h3>
            <span>다른 사람에게 줄 수 있는 것은 무엇인가요?</span>
          </LabelWrapper>
          <Button
            height="56px"
            fontSize="small"
            color="primary"
            filled={false}
            shape="full-rounded"
            onClick={setMineVisible}
          >
            <ButtonContentsWrapper>
              {myCategoryDom}
              <ColoredSearchIcon />
            </ButtonContentsWrapper>
          </Button>
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h3>Take</h3>
            <span>다른 사람에게 받고 싶은 것은 무엇인가요?</span>
          </LabelWrapper>
          <Button
            height="56px"
            fontSize="small"
            color="primary"
            filled={false}
            shape="full-rounded"
            onClick={setYourVisible}
          >
            <ButtonContentsWrapper>
              {yourCategoryDom}
              <ColoredSearchIcon />
            </ButtonContentsWrapper>
          </Button>
        </SectionWrapper>
        <SectionWrapper>
          <LabelWrapper>
            <h3>몇 명과 함께하고 싶나요?</h3>
          </LabelWrapper>
          <SelectComponent
            iconPosition="25px"
            placeholder="여러명이서, 한 명만?"
            shape="rounded"
            color="primary"
            onSelect={setStudyType}
            selected={studyType}
            list={studyList}
            idKeyName="key"
            labelKeyName="value"
          />
        </SectionWrapper>
        <GuestMain.BottomWrap>
          <Button
            color="primary"
            width="100%"
            disabled={!allowSearch}
            onClick={onClickSearch}
          >
            스터디 검색
          </Button>
        </GuestMain.BottomWrap>
      </Wrapper>
    </PageWrapperComponent>
  );
}

export default FilteringTemplate;

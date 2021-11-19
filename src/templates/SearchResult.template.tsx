import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NaviType, StudyTypeEnumToLabel } from "@src/constant/enum.constant";
import styled from "styled-components";
import { FontSize, Padding } from "@src/styles/theme";
import StudyListComponent from "@src/components/organs/StudyList.component";
import SearchLikeFilterLinkButtonComponent from "@src/components/molecules/SearchLikeFilterLinkButton.component";
import EmptyIcon from "@src/components/icon/Empty.icon";

const Wrapper = styled.div`
  padding: 0 ${Padding.pageX};
`;

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  svg {
    margin-bottom: 20px;
  }
  p {
    font-size: ${FontSize.PrimaryDescription};
  }
`;

function SearchResultTemplate({
  give,
  take,
  type,
  studyList,
  hasMore,
  onNext,
  loading,
}) {
  return (
    <PageWrapperComponent title="스터디 필터링" button={null}>
      <Wrapper>
        <SearchLikeFilterLinkButtonComponent
          mb="20px"
          contents={`${give} / ${take} / ${StudyTypeEnumToLabel[type]}`}
        />
      </Wrapper>
      {studyList.length === 0 && (
        <EmptyWrapper>
          <EmptyIcon />
          <p>해당 스터디가 존재하지 않습니다.</p>
        </EmptyWrapper>
      )}
      {studyList.length > 0 && (
        <StudyListComponent
          loading={loading}
          studyList={studyList}
          onClickNext={onNext}
          hasMore={hasMore}
        />
      )}
      <BottomNavigationComponent selected={NaviType.FILTER} />
    </PageWrapperComponent>
  );
}

export default SearchResultTemplate;

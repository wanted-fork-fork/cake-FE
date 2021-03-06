import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NaviType, StudyTypeEnumToLabel } from "@src/constant/enum.constant";
import styled from "styled-components";
import { Padding } from "@src/styles/theme";
import StudyListComponent from "@src/components/organs/StudyList.component";
import SearchLikeFilterLinkButtonComponent from "@src/components/molecules/SearchLikeFilterLinkButton.component";
import EmptyComponent from "@src/components/molecules/Empty.component";
import { useMemo } from "react";

const Wrapper = styled.div`
  padding: 0 ${Padding.pageX};
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
  const ready = useMemo(() => give && take && type, [give, take, type]);
  return (
    <PageWrapperComponent title="스터디 필터링" button={null}>
      <Wrapper>
        <SearchLikeFilterLinkButtonComponent
          mb="20px"
          contents={
            ready ? `${give} / ${take} / ${StudyTypeEnumToLabel[type]}` : ""
          }
        />
      </Wrapper>
      {!loading && studyList.length === 0 && (
        <EmptyComponent message="해당 스터디가 존재하지 않습니다." />
      )}
      <StudyListComponent
        loading={loading}
        studyList={studyList}
        onClickNext={onNext}
        hasMore={hasMore}
      />
      <BottomNavigationComponent selected={NaviType.FILTER} />
    </PageWrapperComponent>
  );
}

export default SearchResultTemplate;

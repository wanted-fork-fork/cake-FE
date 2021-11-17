import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NaviType } from "@src/constant/enum.constant";
import styled from "styled-components";
import { Padding } from "@src/styles/theme";
import StudyListComponent from "@src/components/organs/StudyList.component";

const Wrapper = styled.div`
  padding: 0 ${Padding.pageX};
`;

function SearchResultTemplate({ studyList, hasMore, onNext }) {
  return (
    <PageWrapperComponent title="스터디 필터링" button={null}>
      <Wrapper>
        <StudyListComponent
          studyList={studyList}
          onClickNext={onNext}
          hasMore={hasMore}
        />
      </Wrapper>
      <BottomNavigationComponent selected={NaviType.FILTER} />
    </PageWrapperComponent>
  );
}

export default SearchResultTemplate;

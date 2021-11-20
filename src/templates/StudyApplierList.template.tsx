import styled from "styled-components";

// lib
import { NaviType } from "@src/constant/enum.constant";

// components
import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import ApplierListElementComponent from "@src/components/molecules/ApplierListElement.component";
import EmptyComponent from "@src/components/molecules/Empty.component";

// styles
import { FontSize, Padding } from "@src/styles/theme";

const ListWrapper = styled.div`
  padding: 20px ${Padding.pageX};
`;
const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 52px auto 52px 52px;
  gap: 15px;
  p {
    margin-bottom: 0;
    font-size: ${FontSize.Small};
    text-align: center;
  }
`;
function StudyApplierListTemplate({ loading, applierList }) {
  return (
    <PageWrapperComponent title="신청자 명단" button={null}>
      <ListWrapper>
        {!loading && applierList.length === 0 && (
          <EmptyComponent message="신청한 파티셰가 없습니다." />
        )}
        {applierList.length > 0 && (
          <HeaderWrapper>
            <div />
            <div />
            <p>참여 여부</p>
            <p>신청서</p>
          </HeaderWrapper>
        )}
        {applierList.map((user) => (
          <ApplierListElementComponent key={user.userId} userInfo={user} />
        ))}
      </ListWrapper>
      <BottomNavigationComponent selected={NaviType.STUDY} />
    </PageWrapperComponent>
  );
}

export default StudyApplierListTemplate;

import PageWrapperComponent from "@src/components/organs/PageWrapper.component";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NaviType } from "@src/constant/enum.constant";
import ApplierListElementComponent from "@src/components/molecules/ApplierListElement.component";
import styled from "styled-components";
import { FontSize, Padding } from "@src/styles/theme";
import EmptyComponent from "@src/components/molecules/Empty.component";

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
function StudyApplierListTemplate({ applierList }) {
  return (
    <PageWrapperComponent title="신청자 명단" button={null}>
      <ListWrapper>
        {applierList.length === 0 && (
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

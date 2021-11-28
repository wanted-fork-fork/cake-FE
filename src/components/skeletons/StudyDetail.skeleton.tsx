import { Skeleton } from "antd";
import { LightDivider } from "@src/components/atoms/Divider";
import styled from "styled-components";
import { Padding } from "@src/styles/theme";

const Container = styled.div`
  padding: ${Padding.pageX};
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
const TitleWrapper = styled.div`
  margin-bottom: 10px;
`;
function StudyDetailSkeleton({ showTitle = true }) {
  return (
    <Container>
      <ProfileWrapper>
        <Skeleton.Avatar size="default" active />
        <Skeleton.Input
          size="small"
          style={{ width: "120px", height: "18px" }}
          active
        />
      </ProfileWrapper>
      {showTitle && (
        <div>
          {" "}
          <TitleWrapper>
            <div>
              <Skeleton.Input
                size="small"
                style={{ width: "240px", marginBottom: "10px" }}
                active
              />
            </div>
            <div>
              <Skeleton.Input
                size="small"
                style={{ width: "120px", height: "14px" }}
                active
              />
            </div>
          </TitleWrapper>
          <LightDivider />
        </div>
      )}
      <Skeleton active />
    </Container>
  );
}

export default StudyDetailSkeleton;

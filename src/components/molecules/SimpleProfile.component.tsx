import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import StarIcon from "@src/components/icon/Star.icon";
import styled from "styled-components";
import { FontSize } from "@src/styles/theme";

const ProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
  font-size: ${FontSize.Small};
  span {
    display: flex;
    align-items: center;
    svg {
      margin-bottom: 3px;
      margin-right: 4px;
    }
  }
`;

function SimpleProfileComponent({ user }) {
  return (
    <ProfileWrapper>
      <ProfileFrameComponent
        allowUpload={false}
        size="small"
        imgSrc={user.img}
      />
      <span>{user.nickname}</span>
      <span>
        <StarIcon />
        <span>{user.rate || "비공개"}</span>
      </span>
    </ProfileWrapper>
  );
}

export default SimpleProfileComponent;

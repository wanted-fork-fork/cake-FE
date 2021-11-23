import Link from "next/link";
import styled from "styled-components";

// components
import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import StarIcon from "@src/components/icon/Star.icon";

// styles
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
    <Link href={`/profile/${user.id}`}>
      <a>
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
      </a>
    </Link>
  );
}

export default SimpleProfileComponent;

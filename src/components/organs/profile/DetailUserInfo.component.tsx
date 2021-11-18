import ProfileFrameComponent from "@src/components/molecules/ProfileFrame.component";
import RightArrowIcon from "@src/components/icon/RightArrow.icon";
import styled from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { FontSize, Padding } from "@src/styles/theme";
import { UserMyPageDto } from "@src/models/dto/user.dto";

const ProfileWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  padding: ${Padding.page};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const ProfileInfoWrapper = styled.div`
  width: 100%;
  p {
    margin-bottom: 0;
  }
`;
const Nickname = styled.p`
  font-size: ${FontSize.Default};
`;

const Email = styled.p`
  font-size: ${FontSize.SecondaryLabel};
`;

function DetailUserInfoComponent({ user = null as UserMyPageDto, mb }) {
  return (
    <ProfileWrapper mb={mb}>
      <ProfileFrameComponent
        imgSrc={user.profileImg}
        allowUpload
        size="medium"
      />
      <ProfileInfoWrapper>
        <Nickname>{user.nickname}</Nickname>
        <Email>{user.email}</Email>
      </ProfileInfoWrapper>
      <div>
        <RightArrowIcon />
      </div>
    </ProfileWrapper>
  );
}

export default DetailUserInfoComponent;

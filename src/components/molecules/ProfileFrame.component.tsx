import PatisserieIcon from "@src/components/icon/Patisserie.icon";
import UploadComponent from "@src/components/molecules/Upload.component";
import styled from "styled-components";
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const ProfileImageWrapper = styled.div<BaseProps>`
  ${BaseStyleProps}

  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;
const CircleImageFrame = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  img {
    width: auto;
    height: 80px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;

  background-color: ${theme.color.gray0};

  border: 6px solid ${theme.color.primary};
`;

const S = {
  ProfileImageWrapper,
  CircleImageFrame,
};

function ProfileFrameComponent({
  mb = "",
  allowUpload,
  imgSrc,
  onUploadImage,
}) {
  return (
    <S.ProfileImageWrapper mb={mb}>
      <S.CircleImageFrame>
        {imgSrc ? <img src={imgSrc} alt="프로필 이미지" /> : <PatisserieIcon />}
      </S.CircleImageFrame>
      {allowUpload && <UploadComponent onUploaded={onUploadImage} />}
    </S.ProfileImageWrapper>
  );
}

export default ProfileFrameComponent;

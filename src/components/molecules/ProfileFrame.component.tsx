import PatisserieIcon from "@src/components/icon/Patisserie.icon";
import UploadComponent from "@src/components/molecules/Upload.component";
import styled from "styled-components";
import theme from "@src/styles/theme";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { Resource } from "@src/models/dto/api-response";

interface ProfileFrameProps {
  mb?: string;
  size?: "large" | "small";
  allowUpload?: boolean;
  imgSrc?: string;
  onUploadImage?: (e: Resource) => void;
}

const ProfileImageWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};

  position: relative;
  width: fit-content;
`;
const CircleImageFrame = styled.div<ProfileFrameProps>`
  border: 6px solid ${theme.color.primary};

  img {
    width: auto;
    height: ${({ size }) => (size === "large" ? "80px" : "32px")};
  }

  svg {
    width: auto;
    height: ${({ size }) => (size === "large" ? "48px" : "18px")};
  }

  ${({ size }) => {
    switch (size) {
      case "large":
        return `  
        width: 80px;
       height: 80px;
        `;
      case "small":
        return `  
        width: 32px;
        height: 32px;
        border-width: 3px;
        `;
      default:
        return `  
        width: 80px;
        height: 80px;`;
    }
  }}
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;

  background-color: ${theme.color.gray0};
`;

const S = {
  ProfileImageWrapper,
  CircleImageFrame,
};

ProfileFrameComponent.defaultProps = {
  mb: "",
  size: "large",
  allowUpload: true,
  imgSrc: "",
  onUploadImage: null,
};

function ProfileFrameComponent({
  mb = "",
  size = "large",
  allowUpload = true,
  imgSrc = "",
  onUploadImage = null,
}: ProfileFrameProps) {
  return (
    <S.ProfileImageWrapper mb={mb}>
      <S.CircleImageFrame size={size}>
        {imgSrc ? <img src={imgSrc} alt="프로필 이미지" /> : <PatisserieIcon />}
      </S.CircleImageFrame>
      {allowUpload && <UploadComponent onUploaded={onUploadImage} />}
    </S.ProfileImageWrapper>
  );
}

export default ProfileFrameComponent;

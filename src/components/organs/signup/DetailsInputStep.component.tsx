import styled from "styled-components";

// types
import { ButtonStyleProps } from "@src/components/atoms/Button";

// components
import { UnderlineInput } from "@src/components/atoms/Input";
import PatisserieIcon from "@src/components/icon/Patisserie.icon";
import CameraIcon from "@src/components/icon/Camera.icon";
import DownArrowIcon from "@src/components/icon/DownArrow.icon";
import InputWithSuffixComponent from "@src/components/molcules/InputWithSuffix.component";

// styles
import theme from "@src/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfileImageWrapper = styled.div`
  position: relative;
`;
const CircleImageFrame = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  position: relative;

  background-color: ${theme.color.gray0};

  border: 6px solid ${theme.color.primary};
`;

const IconButton = styled.button<ButtonStyleProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 10;

  border: 1px solid ${theme.color.gray2};
  border-radius: 50%;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  width: 32px;

  cursor: pointer;
`;

const FormWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;

const NicknameWrapper = styled.div`
  width: 50%;
  margin: 0 auto 20px auto;
`;

const DetailWrapper = styled.div`
  width: 100%;
`;

const S = {
  Container,
  ProfileImageWrapper,
  CircleImageFrame,
  IconButton,
  FormWrapper,
  NicknameWrapper,
  DetailWrapper,
};
function DetailsInputStepComponent() {
  return (
    <S.Container>
      <S.ProfileImageWrapper>
        <S.CircleImageFrame>
          <PatisserieIcon />
        </S.CircleImageFrame>
        <S.IconButton color="gray">
          <CameraIcon />
        </S.IconButton>
      </S.ProfileImageWrapper>
      <FormWrapper>
        <NicknameWrapper>
          <UnderlineInput placeholder="닉네임" type="text" />
        </NicknameWrapper>
        <DetailWrapper>
          <InputWithSuffixComponent
            input={
              <UnderlineInput placeholder="어느 단과대이신가요?" type="text" />
            }
            suffix={<DownArrowIcon />}
          />
        </DetailWrapper>
      </FormWrapper>
    </S.Container>
  );
}

export default DetailsInputStepComponent;

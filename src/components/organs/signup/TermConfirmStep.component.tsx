import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/TextButton";
import SmallRightArrowIcon from "@src/components/icon/SmallRightArrow.icon";
import CheckIcon from "@src/components/icon/Check.icon";
import theme from "@src/styles/theme";
import styled from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

interface CircleButtonProps {
  size: string;
  filled?: boolean;
}
const CircleButton = styled.div<CircleButtonProps>`
  border: 1px solid ${theme.color.gray3};
  border-radius: 100px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(${({ size }) => size} - 14px);
  background-color: ${({ filled = false }) =>
    filled ? theme.color.primary : "#fff"};
  svg {
    width: calc(${({ size }) => size} - 12px);
    height: calc(${({ size }) => size} - 12px);
  }
`;

const TermButtonContentsWrapper = styled.div<BaseProps>`
  ${BaseStyleProps};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function TermConfirmStepComponent() {
  return (
    <div>
      <Button
        height="56px"
        fontSize="default"
        color="white"
        mb="40px"
        filled={false}
        p="0 10px"
      >
        <TermButtonContentsWrapper>
          <CircleButton size="28px">
            <CheckIcon color={theme.color.gray3} />
          </CircleButton>
          약관 전체 동의
        </TermButtonContentsWrapper>
      </Button>
      <TermButtonContentsWrapper mb="20px">
        <div>
          <CircleButton size="24px">
            <CheckIcon color={theme.color.gray3} />
          </CircleButton>
        </div>
        <TextButton fontSize="small">
          <span>(필수) Cake 이용약관</span>
          <SmallRightArrowIcon />
        </TextButton>
      </TermButtonContentsWrapper>
      <TermButtonContentsWrapper mb="20px">
        <div>
          <CircleButton size="24px">
            <CheckIcon color={theme.color.gray3} />
          </CircleButton>
        </div>
        <TextButton fontSize="small">
          <span>(필수) Cake 개인정보처리방침</span>
          <SmallRightArrowIcon />
        </TextButton>
      </TermButtonContentsWrapper>
    </div>
  );
}

export default TermConfirmStepComponent;

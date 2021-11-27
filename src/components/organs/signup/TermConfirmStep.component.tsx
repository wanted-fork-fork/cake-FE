import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/TextButton";
import SmallRightArrowIcon from "@src/components/icon/SmallRightArrow.icon";
import CheckIcon from "@src/components/icon/Check.icon";
import theme from "@src/styles/theme";
import styled from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { useCallback, useEffect, useState } from "react";
import useVisibleHook from "@src/hooks/useVisible.hook";

interface CircleButtonProps {
  size: string;
  filled?: boolean;
  selected?: boolean;
}
const CircleButton = styled.div<CircleButtonProps>`
  cursor: pointer;
  border: 1px solid ${theme.color.gray3};
  border-radius: 100px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: calc(${({ size }) => size} - 14px);

  ${({ selected = false, filled = true }) =>
    selected &&
    `
    background-color: ${filled ? theme.color.primary : "#fff"}; 
    border-color: transparent;
    svg {
      color: #fff;
    }
  `}

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

function TermConfirmStepComponent({ confirmed, setConfirmed }) {
  const [
    termConfirmed,
    setTermConfirmed,
    setTermNotConfirmed,
    toggleTermConfirmed,
  ] = useVisibleHook(false);
  const [
    privacyConfirmed,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    togglePrivacyConfirmed,
  ] = useVisibleHook(false);

  const onClickConfirmAll = useCallback(() => {
    if (!confirmed) {
      setTermConfirmed();
      setPrivacyConfirmed();
      setConfirmed(true);
    } else {
      setTermNotConfirmed();
      setPrivacyNotConfirmed();
      setConfirmed(false);
    }
    setConfirmed(!confirmed);
  }, [
    confirmed,
    setConfirmed,
    setPrivacyConfirmed,
    setPrivacyNotConfirmed,
    setTermConfirmed,
    setTermNotConfirmed,
  ]);

  useEffect(() => {
    if (termConfirmed && privacyConfirmed && !confirmed) {
      setConfirmed(true);
    }
    if (confirmed && (!termConfirmed || !privacyConfirmed)) {
      setConfirmed(false);
    }
  }, [confirmed, privacyConfirmed, setConfirmed, termConfirmed]);

  return (
    <div>
      <Button
        height="56px"
        fontSize="default"
        color={confirmed ? "point" : "white"}
        mb="40px"
        filled={confirmed}
        p="0 10px"
        onClick={onClickConfirmAll}
      >
        <TermButtonContentsWrapper>
          <CircleButton size="28px" filled={false} selected={confirmed}>
            <CheckIcon
              color={confirmed ? theme.color.primary : theme.color.gray3}
            />
          </CircleButton>
          약관 전체 동의
        </TermButtonContentsWrapper>
      </Button>
      <TermButtonContentsWrapper mb="20px">
        <div>
          <CircleButton
            size="24px"
            selected={termConfirmed}
            onClick={toggleTermConfirmed}
          >
            <CheckIcon color={termConfirmed ? "#fff" : theme.color.gray3} />
          </CircleButton>
        </div>
        <TextButton fontSize="small">
          <span>(필수) Cake 이용약관</span>
          <SmallRightArrowIcon />
        </TextButton>
      </TermButtonContentsWrapper>
      <TermButtonContentsWrapper mb="20px">
        <div>
          <CircleButton
            size="24px"
            selected={privacyConfirmed}
            onClick={togglePrivacyConfirmed}
          >
            <CheckIcon color={privacyConfirmed ? "#fff" : theme.color.gray3} />
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

import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/TextButton";
import SmallRightArrowIcon from "@src/components/icon/SmallRightArrow.icon";
import CheckIcon from "@src/components/icon/Check.icon";
import theme from "@src/styles/theme";
import styled from "styled-components";
import { BaseProps, BaseStyleProps } from "@src/styles/common";
import { useCallback, useEffect } from "react";
import useVisibleHook from "@src/hooks/useVisible.hook";
import Term from "@src/components/atoms/terms/Term";
import TermPopupComponent from "@src/components/organs/TermPopup.component";
import Privacy from "@src/components/atoms/terms/Privacy";
import TermCheckButtonComponent, {
  CircleButton,
  TermButtonContentsWrapper,
} from "@src/components/molecules/TermCheckButton.component";

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
  const [termVisible, setTermVisible, setTermInvisible] = useVisibleHook(false);
  const [privacyVisible, setPrivacyVisible, setPrivacyInvisible] =
    useVisibleHook(false);

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
      <TermPopupComponent
        title="이용약관"
        visible={termVisible}
        setInvisible={setTermInvisible}
      >
        <Term />
      </TermPopupComponent>
      <TermPopupComponent
        title="개인정보처리방침"
        visible={privacyVisible}
        setInvisible={setPrivacyInvisible}
      >
        <Privacy />
      </TermPopupComponent>

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
      <TermCheckButtonComponent
        confirmed={termConfirmed}
        toggleConfirmed={toggleTermConfirmed}
        setPopupVisible={setTermVisible}
        termName="(필수) Cake 이용약관"
      />
      <TermCheckButtonComponent
        confirmed={privacyConfirmed}
        toggleConfirmed={togglePrivacyConfirmed}
        setPopupVisible={setPrivacyVisible}
        termName="(필수) Cake 개인정보처리방침"
      />
    </div>
  );
}

export default TermConfirmStepComponent;

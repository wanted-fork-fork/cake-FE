import styled from "styled-components";
import { useCallback, useMemo, useState } from "react";

// models
import { Univ } from "@src/models/dto/signup.dto";

// hooks
import useInput from "@src/hooks/useInput.hook";

// components
import { Button } from "@src/components/atoms/Button";
import { UnderlineInput } from "@src/components/atoms/Input";
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

// styles
import { BaseMarginBottom, BaseProps } from "@src/styles/common";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import useTimer from "@src/hooks/useTimer";
import { EmailConfirmLimitTimeInSeconds } from "@src/constant/policy.constant";

const EmailWrap = styled.div<BaseProps>`
  ${BaseMarginBottom};
  display: flex;
  align-items: center;
  width: 100%;
`;

const ConfirmCodeWrap = styled.div<BaseProps>`
  ${BaseMarginBottom};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CodeInputWrap = styled.div`
  position: relative;
  width: 100%;
`;

export type SpaceProp = {
  width?: string;
};

const Space = styled.span<SpaceProp>`
  content: "";
  width: ${({ width }) => width};
`;

type ConfirmEmailStepComponentProps = {
  selectedUniv: Univ;
  onClickReqConfirmMail: (email: string) => Promise<boolean>;
  onCheckConfirmMail: (code: string) => void;
};

const S = {
  EmailWrap,
  ConfirmCodeWrap,
  ErrorMessage,
  Space,
  CodeInputWrap,
};

const ConfirmEmailStepComponent = observer(
  ({
    selectedUniv,
    onClickReqConfirmMail,
    onCheckConfirmMail,
  }: ConfirmEmailStepComponentProps) => {
    const { signupStore } = useStores();
    const [allowInputCode, setAllowInputCode] = useState(false);
    const [requestedMail, setRequestedMail] = useState(false);
    const [allowResend, setAllowResend] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const { value: code, handleChange: handleChangeCode } = useInput("");

    const { formatted } = useTimer({
      limit: requestedMail ? EmailConfirmLimitTimeInSeconds : 0,
      onTimerEnded: () => setAllowInputCode(false),
    });

    const onChangeEmail = useCallback(
      (e) => {
        setAllowResend(false);
        setEmail(e.target.value);
      },
      [setEmail],
    );
    const onSendEmail = useCallback(async () => {
      setLoading(true);
      setRequestedMail(false);
      setAllowInputCode(false);
      const success = await onClickReqConfirmMail(email);
      if (success) {
        setRequestedMail(true);
        setAllowInputCode(true);
        setAllowResend(true);
      }
      setLoading(false);
    }, [email, onClickReqConfirmMail]);

    const onCheckCode = useCallback(() => {
      onCheckConfirmMail(code);
    }, [code, onCheckConfirmMail]);

    const disableRequestMail = useMemo(
      () => loading || email.length === 0,
      [email, loading],
    );
    const disableConfirmCode = useMemo(
      () => code.length === 0 || !allowInputCode,
      [allowInputCode, code],
    );

    const sendEmailButtonText = useMemo(() => {
      if (loading) return "이메일 전송중입니다.";
      if (allowResend) return "이메일로 인증번호 다시 받기";
      return "이메일로 인증번호 받기";
    }, [allowResend, loading]);

    return (
      <div>
        <S.EmailWrap mb="20px">
          <UnderlineInput
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일"
          />
          <span>@</span>
          <UnderlineInput value={selectedUniv.email} disabled />
        </S.EmailWrap>
        <Button
          color="primary"
          mb="20px"
          onClick={onSendEmail}
          disabled={disableRequestMail}
        >
          {sendEmailButtonText}
        </Button>
        {requestedMail && (
          <S.ConfirmCodeWrap mb="20px">
            <InputWithSuffixComponent
              input={
                <UnderlineInput
                  placeholder="인증번호 입력"
                  value={code}
                  onChange={handleChangeCode}
                  disabled={!allowInputCode}
                />
              }
              suffix={<span>{formatted}</span>}
            />
            <div>
              <Button
                color="primary"
                filled={false}
                width="4.45rem"
                onClick={onCheckCode}
                disabled={disableConfirmCode}
              >
                인증
              </Button>
            </div>
          </S.ConfirmCodeWrap>
        )}
        {!loading && signupStore.errors.email && (
          <ErrorMessage>{signupStore.errors.email}</ErrorMessage>
        )}
      </div>
    );
  },
);

export default ConfirmEmailStepComponent;

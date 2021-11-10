import styled from "styled-components";
import { useCallback, useMemo, useState } from "react";

// models
import { Univ } from "@src/models/dto/signup.dto";

// hooks
import useInput from "@src/hooks/useInput.hook";

// components
import { Button } from "@src/components/atoms/Button";
import { UnderlineInput } from "@src/components/atoms/Input";
import InputWithSuffixComponent from "@src/components/molcules/InputWithSuffix.component";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

// styles
import { BaseMarginBottom, BaseProps } from "@src/styles/common";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";

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
  onClickReqConfirmMail: (email: string) => void;
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

    const { value: email, handleChange: handleChangeEmail } = useInput("");
    const { value: code, handleChange: handleChangeCode } = useInput("");

    const onSendEmail = useCallback(() => {
      setRequestedMail(true);
      setAllowInputCode(true);
      onClickReqConfirmMail(email);
    }, [email, onClickReqConfirmMail]);

    const onCheckCode = useCallback(() => {
      onCheckConfirmMail(code);
    }, [code, onCheckConfirmMail]);

    const disableRequestMail = useMemo(() => email.length === 0, [email]);
    const disableConfirmCode = useMemo(
      () => code.length === 0 || !allowInputCode,
      [allowInputCode, code],
    );

    return (
      <div>
        <S.EmailWrap mb="20px">
          <UnderlineInput
            value={email}
            onChange={handleChangeEmail}
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
          이메일로 인증번호 받기
        </Button>
        {requestedMail && (
          <S.ConfirmCodeWrap mb="10px">
            <InputWithSuffixComponent
              input={
                <UnderlineInput
                  placeholder="인증번호 입력"
                  value={code}
                  onChange={handleChangeCode}
                  disabled={!allowInputCode}
                />
              }
              suffix={<span>04:59</span>}
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
        <ErrorMessage>이미 가입된 이메일입니다!</ErrorMessage>
      </div>
    );
  },
);

export default ConfirmEmailStepComponent;

import styled from "styled-components";

// components
import { Button } from "@src/components/atoms/Button";
import { UnderlineInput } from "@src/components/atoms/Input";
import InputWithSuffixComponent from "@src/components/molcules/InputWithSuffix.component";

// styles
import theme, { FontSize } from "@src/styles/theme";
import { BaseMarginBottom, BaseProps } from "@src/styles/common";
import { Univ } from "@src/models/dto/signup.dto";
import useInput from "@src/hooks/useInput.hook";
import { useCallback } from "react";

const EmailWrap = styled.div<BaseProps>`
  ${BaseMarginBottom};
  display: flex;
  align-items: center;
  width: 100%;
`;

const ErrorMessage = styled.p`
  font-size: ${FontSize.PrimaryDescription};
  color: ${theme.color.black};
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
};

const S = {
  EmailWrap,
  ConfirmCodeWrap,
  ErrorMessage,
  Space,
  CodeInputWrap,
};

function ConfirmEmailStepComponent({
  selectedUniv,
  onClickReqConfirmMail,
  onCheckConfirmMail,
}) {
  const { value: email, handleChange: handleChangeEmail } = useInput("");
  const { value: code, handleChange: handleChangeCode } = useInput("");

  const onSendEmail = useCallback(() => {
    onClickReqConfirmMail(email);
  }, [email, onClickReqConfirmMail]);

  const onCheckCode = useCallback(() => {
    onCheckConfirmMail(code);
  }, [code, onCheckConfirmMail]);

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
      <Button color="primary" mb="20px" onClick={onSendEmail}>
        이메일로 인증번호 받기
      </Button>
      <S.ConfirmCodeWrap mb="10px">
        <InputWithSuffixComponent
          input={
            <UnderlineInput
              placeholder="인증번호 입력"
              value={code}
              onChange={handleChangeCode}
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
          >
            인증
          </Button>
        </div>
      </S.ConfirmCodeWrap>
      <S.ErrorMessage>이미 가입된 이메일입니다!</S.ErrorMessage>
    </div>
  );
}

export default ConfirmEmailStepComponent;

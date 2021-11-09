import { BaseMarginBottom, BaseProps } from "@src/styles/common";
import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";
import { Button } from "@src/components/atoms/Button";
import { UnderlineInput } from "@src/components/atoms/Input";

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

const S = { EmailWrap, ConfirmCodeWrap, ErrorMessage, Space, CodeInputWrap };
function ConfirmEmailStepComponent() {
  return (
    <div>
      <S.EmailWrap mb="20px">
        <UnderlineInput />
        <span>@</span>
        <UnderlineInput />
      </S.EmailWrap>
      <Button color="primary" mb="20px">
        이메일로 인증번호 받기
      </Button>
      <S.ConfirmCodeWrap mb="10px">
        <S.CodeInputWrap>
          <UnderlineInput />
          <span>04:59</span>
        </S.CodeInputWrap>
        <div>
          <Button color="primary" filled={false} width="4.45rem">
            인증
          </Button>
        </div>
      </S.ConfirmCodeWrap>
      <S.ErrorMessage>이미 가입된 이메일입니다!</S.ErrorMessage>
    </div>
  );
}

export default ConfirmEmailStepComponent;

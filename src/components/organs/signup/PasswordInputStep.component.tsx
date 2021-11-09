import { UnderlineInput } from "@src/components/atoms/Input";

function PasswordInputStepComponent() {
  return (
    <div>
      <UnderlineInput type="password" placeholder="비밀번호 입력" mb="20px" />
      <UnderlineInput type="password" placeholder="비밀번호 확인" />
    </div>
  );
}

export default PasswordInputStepComponent;

import { UnderlineInput } from "@src/components/atoms/Input";
import useInput from "@src/hooks/useInput.hook";
import { useEffect, useMemo } from "react";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";
import { useStores } from "@src/store/root.store";

function PasswordInputStepComponent() {
  const { signupStore } = useStores();

  const { value: password1, handleChange: handleChangePassword1 } =
    useInput("");
  const { value: password2, handleChange: handleChangePassword2 } =
    useInput("");

  const matched = useMemo(
    () => password1 && password1 === password2,
    [password1, password2],
  );

  useEffect(() => {
    if (matched) {
      signupStore.setFormValue("pwd", password1);
    } else {
      signupStore.setFormValue("pwd", "");
    }
  }, [matched, password1, signupStore]);

  return (
    <div>
      <UnderlineInput
        value={password1}
        onChange={handleChangePassword1}
        type="password"
        placeholder="비밀번호 입력"
        mb="20px"
      />
      <UnderlineInput
        value={password2}
        onChange={handleChangePassword2}
        type="password"
        placeholder="비밀번호 확인"
      />
      <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
    </div>
  );
}

export default PasswordInputStepComponent;

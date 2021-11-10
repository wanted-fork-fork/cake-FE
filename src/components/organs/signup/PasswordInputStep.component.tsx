import { UnderlineInput } from "@src/components/atoms/Input";
import useInput from "@src/hooks/useInput.hook";
import { useCallback, useEffect, useMemo } from "react";
import { observer } from "mobx-react";
// stores
import { useStores } from "@src/store/root.store";
// constant
import { PasswordMinLength } from "@src/constant/policy.constant";
// components
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

const PasswordInputStepComponent = observer(() => {
  const { signupStore } = useStores();

  const { value: password1, handleChange: handleChangePassword1 } =
    useInput("");
  const { value: password2, handleChange: handleChangePassword2 } =
    useInput("");

  const matched = useMemo(
    () => password1 && password1 === password2,
    [password1, password2],
  );

  const validate = useCallback(() => {
    if (password1.length < PasswordMinLength) {
      signupStore.setErrorValue(
        "pwd",
        `비밀번호는 최소 ${PasswordMinLength}자 이상으로 설정해주세요.`,
      );
    } else if (password2 !== "" && !matched) {
      signupStore.setFormValue("pwd", "");
      signupStore.setErrorValue("pwd", "비밀번호가 일치하지 않습니다.");
    } else {
      signupStore.cleanErrors();
    }
    if (password1.length >= PasswordMinLength && password2 !== "" && matched) {
      signupStore.setFormValue("pwd", password1);
      signupStore.cleanErrors();
    }
  }, [matched, password1, password2, signupStore]);

  useEffect(() => {
    validate();
  }, [password1, password2, validate]);

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
        mb="20px"
      />
      {signupStore.errors.pwd && (
        <ErrorMessage>{signupStore.errors.pwd}</ErrorMessage>
      )}
    </div>
  );
});

export default PasswordInputStepComponent;

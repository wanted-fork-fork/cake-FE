import Link from "next/link";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import { Button } from "@src/components/atoms/Button";

const SignupCompleteStepComponent = observer(() => {
  const { signupStore } = useStores();

  return (
    <div>
      {signupStore.loading && <p>회원가입을 마무리하는 중입니다...</p>}
      {!signupStore.loading && signupStore.completedSignup && (
        <div>
          <p> 회원가입을 완료했습니다! 축하합니다!</p>
          <Link href="/login">
            <a>
              <Button color="primary">로그인 하러 가기</Button>
            </a>
          </Link>
        </div>
      )}
      {!signupStore.loading && !signupStore.completedSignup && (
        <div>
          <p>회원가입 중에 오류가 발생했습니다.</p>
          <Link href="/">
            <a>
              <Button color="primary">메인으로 이동</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
});

export default SignupCompleteStepComponent;

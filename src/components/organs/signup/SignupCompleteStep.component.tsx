import Link from "next/link";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import { Button } from "@src/components/atoms/Button";
import CakeV2Icon from "@src/components/icon/CakeV2.icon";
import styled from "styled-components";
import { GuestMain } from "@src/styles/template/GuestMain.styles";

const Container = styled.div`
  h3 {
    margin-top: 20px;
  }
`;

const SignupCompleteStepComponent = observer(() => {
  const { signupStore } = useStores();

  return (
    <div>
      {signupStore.loading && <p>회원가입을 마무리하는 중입니다...</p>}
      {!signupStore.loading && signupStore.completedSignup && (
        <Container>
          <CakeV2Icon />
          <h3>회원가입이 완료되었습니다!</h3>
          <p>가입한 계정으로 로그인해주세요!</p>
          <GuestMain.BottomWrap>
            <Link href="/login">
              <a>
                <Button color="primary">로그인</Button>
              </a>
            </Link>
          </GuestMain.BottomWrap>
        </Container>
      )}
      {!signupStore.loading && !signupStore.completedSignup && (
        <div>
          <p>회원가입 중에 오류가 발생했습니다.</p>
          <GuestMain.BottomWrap>
            <Link href="/">
              <a>
                <Button color="primary">메인으로 이동</Button>
              </a>
            </Link>
          </GuestMain.BottomWrap>
        </div>
      )}
    </div>
  );
});

export default SignupCompleteStepComponent;

import styled from "styled-components";
import Link from "next/link";

// components
import AppTitleComponent from "@src/components/molecules/AppTitle.component";
import { TextButton } from "@src/components/atoms/TextButton";
import { DividedInput } from "@src/components/atoms/Input";
import { Button } from "@src/components/atoms/Button";
import { ErrorMessage } from "@src/components/atoms/text/ErrorMessage";

// styles
import SGuestMain from "@src/styles/template/GuestMain.styles";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const ContentsWrap = styled.form<BaseProps>`
  ${BaseStyleProps};

  background: #fff;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`;

const S = { ContentsWrap };

export type LoginForm = {
  email: string;
  password: string;
};

function LoginPageTemplate({ onSubmit, onChange, values, error }): JSX.Element {
  return (
    <SGuestMain.Container>
      <AppTitleComponent mb="60px" />
      <S.ContentsWrap mb="20px" onSubmit={onSubmit}>
        <DividedInput
          height="65px"
          value={values.email}
          onChange={onChange}
          placeholder="아이디"
          id="email"
          name="email"
          type="email"
          data-testid="email-inp"
        />
        <DividedInput
          height="65px"
          value={values.password}
          onChange={onChange}
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
          data-testid="password-inp"
        />
        <Button
          onClick={onSubmit}
          color="primary"
          height="50px"
          mb="10px"
          data-testid="login"
        >
          로그인
        </Button>
        <ErrorMessage textAlign="center" mb="10px" data-testid="login-error">
          {error}
        </ErrorMessage>
      </S.ContentsWrap>
      <Link href="/signup">
        <a>
          <Button color="white" mb="20px">
            학교 계정으로 회원가입
          </Button>
        </a>
      </Link>
      <TextButton color="white" type="button">
        아이디 | 비밀번호 찾기
      </TextButton>
    </SGuestMain.Container>
  );
}

// Login Button
// <SGuestMain.RoundedButton type="button" onClick={onSubmit} mb="20px">
//   로그인
// </SGuestMain.RoundedButton>

export default LoginPageTemplate;

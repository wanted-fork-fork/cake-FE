import styled from "styled-components";

// components
import AppTitleComponent from "@src/components/molcules/AppTitle.component";
import { TextButton } from "@src/components/atoms/LinkButton";
import { DividedInput } from "@src/components/atoms/Input";

// styles
import SGuestMain from "@src/styles/template/GuestMain.styles";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const ContentsWrap = styled.form<BaseProps>`
  ${BaseStyleProps};

  background: #fff;
  border-radius: 12px;

  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`;

const S = { ContentsWrap };

export type LoginForm = {
  email: string;
  password: string;
};

function LoginPageTemplate({ onSubmit, onChange, values }): JSX.Element {
  return (
    <SGuestMain.Container>
      <AppTitleComponent mb="100px" />
      <S.ContentsWrap mb="20px" onSubmit={onSubmit}>
        <DividedInput
          value={values.email}
          onChange={onChange}
          placeholder="아이디"
          id="email"
          name="email"
          type="email"
        />
        <DividedInput
          value={values.password}
          onChange={onChange}
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
        />
      </S.ContentsWrap>
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

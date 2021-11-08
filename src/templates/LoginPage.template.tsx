import styled from "styled-components";

// components
import AppTitleComponent from "@src/components/molcules/AppTitle.component";

// styles
import SGuestMain from "@src/styles/template/GuestMain.styles";
import theme, { FontSize, MyThemeProps } from "@src/styles/theme";
import { MarginBottom } from "@src/styles/common";

const ContentsWrap = styled.form<MyThemeProps>`
  ${MarginBottom};

  background: #fff;
  border-radius: 12px;

  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  font-size: ${FontSize.Default};

  &:not(:first-child) {
    border-top: 1px solid ${theme.color.gray2};
  }
  &:focus {
    outline: none;
  }
`;

const S = { ContentsWrap, Input };

export type LoginForm = {
  email: string;
  password: string;
};

function LoginPageTemplate({ onSubmit, onChange, values }): JSX.Element {
  return (
    <SGuestMain.Container>
      <AppTitleComponent mb="100px" />
      <S.ContentsWrap mb="20px" onSubmit={onSubmit}>
        <S.Input
          value={values.email}
          onChange={onChange}
          placeholder="아이디"
          id="email"
          name="email"
          type="email"
        />
        <S.Input
          value={values.password}
          onChange={onChange}
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
        />
      </S.ContentsWrap>
      <SGuestMain.TextButton type="button">
        아이디 | 비밀번호 찾기
      </SGuestMain.TextButton>
    </SGuestMain.Container>
  );
}

// Login Button
// <SGuestMain.RoundedButton type="button" onClick={onSubmit} mb="20px">
//   로그인
// </SGuestMain.RoundedButton>

export default LoginPageTemplate;

import { FormEventHandler } from "react";

interface Props {
  onSubmit: FormEventHandler;
}

function LoginPageTemplate({ onSubmit }: Props): JSX.Element {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">
        이메일
        <input id="email" type="email" name="email" placeholder="이메일 입력" />
      </label>
      <label htmlFor="password">
        비밀번호
        <input
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호 입력"
        />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginPageTemplate;

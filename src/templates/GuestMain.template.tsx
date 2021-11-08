import Link from "next/link";

// components
import AppTitleComponent from "@src/components/molcules/AppTitle.component";

import SGuestMain from "@src/styles/template/GuestMain.styles";
import { EventHandler, MouseEventHandler } from "react";

export type GuestMainProps = {
  onClickLogin: MouseEventHandler;
  onClickSignup: MouseEventHandler;
};

function GuestMainTemplate({ onClickLogin, onClickSignup }: GuestMainProps) {
  return (
    <SGuestMain.Container>
      <AppTitleComponent mb="100px" />
      <SGuestMain.ContentsWrap mb="20px">
        <Link href="/login">
          <a>
            <SGuestMain.RoundedButton type="button" onClick={onClickLogin}>
              로그인
            </SGuestMain.RoundedButton>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <SGuestMain.RoundedButton type="button" onClick={onClickSignup}>
              학교 계정으로 회원가입
            </SGuestMain.RoundedButton>
          </a>
        </Link>
      </SGuestMain.ContentsWrap>
      <SGuestMain.TextButton type="button">
        아이디 | 비밀번호 찾기
      </SGuestMain.TextButton>
    </SGuestMain.Container>
  );
}

export default GuestMainTemplate;
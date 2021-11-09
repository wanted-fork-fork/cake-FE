import { MouseEventHandler } from "react";
import Link from "next/link";

// components
import AppTitleComponent from "@src/components/molcules/AppTitle.component";

// styles
import SGuestMain from "@src/styles/template/GuestMain.styles";
import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/LinkButton";

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
            <Button color="white" type="button" onClick={onClickLogin}>
              로그인
            </Button>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <Button color="white" type="button" onClick={onClickSignup}>
              학교 계정으로 회원가입
            </Button>
          </a>
        </Link>
      </SGuestMain.ContentsWrap>
      <TextButton color="white" type="button">
        아이디 | 비밀번호 찾기
      </TextButton>
    </SGuestMain.Container>
  );
}

export default GuestMainTemplate;

import Link from "next/link";

// components
import AppTitleComponent from "@src/components/molecules/AppTitle.component";
import { Button } from "@src/components/atoms/Button";
import { TextButton } from "@src/components/atoms/LinkButton";

// styles
import SGuestMain from "@src/styles/template/GuestMain.styles";

function GuestMainTemplate() {
  return (
    <SGuestMain.Container>
      <AppTitleComponent mb="100px" />
      <SGuestMain.ContentsWrap mb="20px">
        <Link href="/login">
          <a>
            <Button color="white" type="button">
              로그인
            </Button>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <Button color="white" type="button">
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

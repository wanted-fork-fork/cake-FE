import Link from "next/link";
import { BottomSection } from "@src/components/atoms/BottomSection";

// components
import HomeIcon from "@src/components/icon/Home.icon";
import CategoryMenuIcon from "@src/components/icon/CategoryMenu.icon";
import StudyManageIcon from "@src/components/icon/StudyManage.icon";
import MyPageIcon from "@src/components/icon/MyPage.icon";

// styles
import styled from "styled-components";
import { BaseButton, ButtonStyleProps } from "@src/components/atoms/Button";
import { FontSize } from "@src/styles/theme";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const NavButton = styled.a<ButtonStyleProps>`
  ${BaseButton};
  background-color: #fff;
  width: 25%;
  p {
    font-size: ${FontSize.Small};
  }
`;
function BottomNavigationComponent() {
  return (
    <BottomSection height="80px">
      <NavWrapper>
        <Link href="/">
          <NavButton type="button">
            <HomeIcon />
            <p>메인</p>
          </NavButton>
        </Link>
        <Link href="/search">
          <NavButton type="button">
            <CategoryMenuIcon />
            <p>카테고리</p>
          </NavButton>
        </Link>
        <Link href="/profile/study">
          <NavButton type="button">
            <StudyManageIcon />
            <p>스터디 관리</p>
          </NavButton>
        </Link>
        <Link href="/profile">
          <NavButton type="button">
            <MyPageIcon />
            <p>마이페이지</p>
          </NavButton>
        </Link>
      </NavWrapper>
    </BottomSection>
  );
}

export default BottomNavigationComponent;

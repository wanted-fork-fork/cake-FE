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
import theme, { FontSize } from "@src/styles/theme";
import { NaviType } from "@src/constant/enum.constant";

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
interface DesType {
  selected: boolean;
}
const Description = styled.p<DesType>`
  color: ${({ selected }) =>
    selected ? theme.color.point : theme.color.black};
`;
function BottomNavigationComponent({ selected = NaviType.MAIN }) {
  return (
    <BottomSection height="80px">
      <NavWrapper>
        <Link href="/">
          <NavButton type="button">
            <HomeIcon selected={selected === NaviType.MAIN} />
            <Description selected={selected === NaviType.MAIN}>
              메인
            </Description>
          </NavButton>
        </Link>
        <Link href="/filter">
          <NavButton type="button">
            <CategoryMenuIcon selected={selected === NaviType.FILTER} />
            <Description selected={selected === NaviType.FILTER}>
              스터디 필터링
            </Description>
          </NavButton>
        </Link>
        <Link href="/profile/study">
          <NavButton type="button">
            <StudyManageIcon selected={selected === NaviType.STUDY} />
            <Description selected={selected === NaviType.STUDY}>
              스터디 관리
            </Description>
          </NavButton>
        </Link>
        <Link href="/profile">
          <NavButton type="button">
            <MyPageIcon selected={selected === NaviType.PROFILE} />
            <Description selected={selected === NaviType.PROFILE}>
              마이페이지
            </Description>
          </NavButton>
        </Link>
      </NavWrapper>
    </BottomSection>
  );
}

export default BottomNavigationComponent;

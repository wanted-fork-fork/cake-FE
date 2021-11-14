import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { Button } from "@src/components/atoms/Button";
import Link from "next/link";
import { NaviType } from "@src/constant/enum.constant";

function ProfilePage() {
  return (
    <div>
      준비중입니다 :)
      <Link href="/logout">
        <a>
          <Button color="primary">로그아웃</Button>
        </a>
      </Link>
      <BottomNavigationComponent selected={NaviType.PROFILE} />
    </div>
  );
}

export default ProfilePage;

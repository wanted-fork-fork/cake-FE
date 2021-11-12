import GuestMainTemplate from "@src/templates/GuestMain.template";
import { useStores } from "@src/store/root.store";
import { useMemo } from "react";
import UserMainPage from "@src/pages/main";

function MainPage() {
  const { userStore } = useStores();

  // TODO :: authenticated 확인을 HOC로 빼내기
  const authenticated = useMemo(() => userStore.isAuthenticated(), [userStore]);

  return authenticated ? <UserMainPage /> : <GuestMainTemplate />;
}

export default MainPage;

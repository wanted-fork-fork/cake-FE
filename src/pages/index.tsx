import { useStores } from "@src/store/root.store";
import { useMemo } from "react";
import UserMainTemplate from "@src/templates/UserMain.template";
import GuestMainTemplate from "@src/templates/GuestMain.template";

function MainPage() {
  const { userStore } = useStores();

  // TODO :: authenticated 확인을 HOC로 빼내기
  const authenticated = useMemo(() => userStore.isAuthenticated(), [userStore]);

  return authenticated ? <UserMainTemplate /> : <GuestMainTemplate />;
}

export default MainPage;

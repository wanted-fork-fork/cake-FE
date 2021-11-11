import GuestMainTemplate from "@src/templates/GuestMain.template";
import { useStores } from "@src/store/root.store";
import { useEffect, useMemo, useState } from "react";
import UserMainTemplate from "@src/templates/UserMain.template";

function MainPage() {
  const { userStore } = useStores();

  const [email, setEmail] = useState("");
  // TODO :: authenticated 확인을 HOC로 빼내기
  const authenticated = useMemo(() => userStore.isAuthenticated(), [userStore]);

  useEffect(() => {
    if (authenticated) {
      userStore.test().then((x) => setEmail(x));
    }
  }, [authenticated, userStore]);

  return authenticated ? (
    <UserMainTemplate email={email} />
  ) : (
    <GuestMainTemplate />
  );
}

export default MainPage;

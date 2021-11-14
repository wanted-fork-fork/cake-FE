import UserMainPage from "@src/pages/main";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import GuestMainTemplate from "@src/templates/GuestMain.template";
import { AuthPermissionType } from "@src/constant/api.constant";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";

const MainPage = observer(() => {
  const { userStore } = useStores();
  return userStore.isAuthenticated() ? <UserMainPage /> : <GuestMainTemplate />;
});

export default MainPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.ALL);

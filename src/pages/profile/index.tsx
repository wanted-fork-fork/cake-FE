import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import MyPageTemplate from "@src/templates/MyPage.template";
import { observer } from "mobx-react";
import { useStores } from "@src/store/root.store";
import { useEffect } from "react";

const ProfilePage = observer(() => {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.getMyProfile();
  }, [userStore]);

  return <MyPageTemplate profile={userStore.myProfile} />;
});

export default ProfilePage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

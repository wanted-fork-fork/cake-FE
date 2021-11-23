import OtherProfileTemplate from "@src/templates/OtherProfile.template";
import { useStores } from "@src/store/root.store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserMyPageDto } from "@src/models/dto/user.dto";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";

function OtherProfilePage() {
  const { userStore } = useStores();
  const router = useRouter();

  const [profile, setProfile] = useState<UserMyPageDto | null>(null);

  useEffect(() => {
    if (router.query.id)
      userStore
        .getUserProfile(router.query.id)
        .then((profileRes) => setProfile(profileRes));
  }, [router.query.id, userStore]);

  return <OtherProfileTemplate profile={profile} />;
}

export default OtherProfilePage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

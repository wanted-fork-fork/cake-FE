import { useEffect, useState } from "react";

// lib
import { useStores } from "@src/store/root.store";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import { StudyManageType } from "@src/constant/enum.constant";

// components
import MyStudyListTemplate from "@src/templates/MyStudyList.template";
import { useRouter } from "next/router";

function MyStudyListPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [list, setList] = useState([]);

  useEffect(() => {
    const { type = StudyManageType.MINE } = router.query;
    if (type === StudyManageType.MINE)
      studyStore.getMyStudyList().then((res) => setList([...res]));
    if (type === StudyManageType.OTHER)
      studyStore.getMyOtherStudyList().then((res) => setList([...res]));
  }, [router, studyStore]);

  return <MyStudyListTemplate studyList={list} />;
}

export default MyStudyListPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

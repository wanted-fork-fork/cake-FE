// lib
import useInfiniteLoading from "@src/hooks/useInfiniteLoading.hook";
import { useStores } from "@src/store/root.store";

// components
import UserMainTemplate from "@src/templates/UserMain.template";
import { memo } from "react";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";

function UserMainPage() {
  const { studyStore } = useStores();

  const {
    items: studyList,
    hasMore,
    onNext,
  } = useInfiniteLoading({
    getItems: (p) => studyStore.getStudyFeed(p),
    pageToLoad: 0,
    listKeyName: "study",
  });

  return (
    <UserMainTemplate
      studyList={studyList}
      onClickNext={onNext}
      hasMore={hasMore}
    />
  );
}

export default memo(UserMainPage);
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

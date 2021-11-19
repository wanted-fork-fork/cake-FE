import SearchResultTemplate from "@src/templates/SearchResult.template";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import useInfiniteLoading from "@src/hooks/useInfiniteLoading.hook";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

function SearchResultPage() {
  const router = useRouter();
  const { studyStore } = useStores();
  const [give, setGive] = useState("");
  const [take, setTake] = useState("");

  const getNextItems = useCallback(
    async (page) =>
      studyStore
        .getFilteredStudy(
          page,
          router.query.take,
          router.query.give,
          router.query.type,
        )
        .then((res) => {
          setGive(res.filter.give);
          setTake(res.filter.take);
          return res;
        }),
    [router, studyStore],
  );

  const {
    items: studyList,
    hasMore,
    onNext,
  } = useInfiniteLoading({
    ready:
      router.query.take !== undefined &&
      router.query.give !== undefined &&
      router.query.type !== undefined,
    getItems: getNextItems,
    pageToLoad: 0,
    listKeyName: "study",
  });

  return (
    <SearchResultTemplate
      give={give}
      take={take}
      type={router.query.type}
      studyList={studyList}
      hasMore={hasMore}
      onNext={onNext}
    />
  );
}

export default SearchResultPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

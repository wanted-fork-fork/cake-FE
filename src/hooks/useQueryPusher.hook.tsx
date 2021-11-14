import { useCallback } from "react";
import { useRouter } from "next/router";

function useQueryPusher(shallow = false) {
  const router = useRouter();

  const handleChangeQuery = useCallback(
    (json) =>
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, ...json },
        },
        {
          pathname: router.pathname,
          query: { ...router.query, ...json },
        },
        { shallow },
      ),
    [router, shallow],
  );

  return handleChangeQuery;
}

export default useQueryPusher;

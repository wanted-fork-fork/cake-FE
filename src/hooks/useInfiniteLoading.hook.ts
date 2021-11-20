import { useCallback, useEffect, useRef, useState } from "react";

const useInfiniteLoading = ({
  ready = true,
  getItems,
  pageToLoad = 0,
  listKeyName,
}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(pageToLoad);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadItems = useCallback(
    async (nextPage) => {
      /* 3 */
      const data = await getItems(nextPage);
      if (data[listKeyName].length === 0) setHasMore(false);
      else {
        setHasMore(true); /* 4 */
        setItems((prevItems) => [...prevItems, ...data[listKeyName]]);
      }
      setLoading(false);
    },
    [getItems, listKeyName],
  );

  const onNext = useCallback(() => {
    setPage(page + 1);
    setLoading(true);
    loadItems(page + 1);
  }, [loadItems, page]);

  useEffect(() => {
    if (!ready) return;
    if (initialPageLoaded.current) {
      return;
    }

    if (loadItems(pageToLoad)) {
      /* 5 */
      initialPageLoaded.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return {
    items,
    hasMore,
    loadItems,
    onNext,
    loading,
  };
};

export default useInfiniteLoading;

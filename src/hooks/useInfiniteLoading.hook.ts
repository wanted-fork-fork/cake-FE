import { useCallback, useEffect, useRef, useState } from "react";

const useInfiniteLoading = ({ getItems, pageToLoad = 0, listKeyName }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(pageToLoad);
  const initialPageLoaded = useRef(false);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = useCallback(
    async (nextPage) => {
      /* 3 */
      const data = await getItems(nextPage);
      if (data.length === 0) setHasMore(false);
      else {
        setHasMore(true); /* 4 */
        setItems((prevItems) => [...prevItems, ...data[listKeyName]]);
      }
    },
    [getItems, listKeyName],
  );

  const onNext = useCallback(() => {
    setPage(page + 1);
    loadItems(page + 1);
  }, [loadItems, page]);

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }

    loadItems(pageToLoad); /* 5 */
    initialPageLoaded.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    items,
    hasMore,
    loadItems,
    onNext,
  };
};

export default useInfiniteLoading;

import { useEffect } from "react";
import { useRouter } from "next/router";

/**
 * Hook that listens to `next/router` `'routeChangeStart'` events and prevents changing
 * to a requested URL when `shouldPreventRouteChange` is `true`.
 *
 * @param {boolean} shouldPreventRouteChange Whether to prevent all Next.js route changes or not.
 * @param {Function} [onRouteChangePrevented] Callback function called when route change was prevented (optional).
 */
function usePreventRouteChangeIf(
  shouldPreventRouteChange,
  onRouteChangePrevented,
) {
  const router = useRouter();

  useEffect(() => {
    const routeChangeStart = (url) => {
      if (router.asPath !== url && shouldPreventRouteChange) {
        router.events.emit("routeChangeError");
        if (onRouteChangePrevented) onRouteChangePrevented(url);
        // Following is a hack-ish solution to abort a Next.js route change
        // as there's currently no official API to do so
        // See https://github.com/zeit/next.js/issues/2476#issuecomment-573460710
        // eslint-disable-next-line no-alert
        if (!window.confirm("페이지를 나가면 입력한 내용이 저장되지 않습니다."))
          // 에러 객체로 반환할 경우 internal error 발생
          // eslint-disable-next-line no-throw-literal
          throw `Route change to "${url}" was aborted`;
      }
    };

    const onRefresh = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    router.events.on("routeChangeStart", routeChangeStart);
    window.addEventListener("beforeunload", onRefresh);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      window.removeEventListener("beforeunload", onRefresh);
    };
  }, [
    onRouteChangePrevented,
    router.asPath,
    router.events,
    shouldPreventRouteChange,
  ]);
}

export default usePreventRouteChangeIf;

import { useStores } from "@src/store/root.store";
import { useEffect, useMemo } from "react";
import GuestMainTemplate from "@src/templates/GuestMain.template";
import { useRouter } from "next/router";

const allowedOnlyToGuest = ["/", "/login", "/signup"];

function WithAuthenticationHoc({ children }) {
  const { userStore } = useStores();
  const router = useRouter();

  useEffect(() => userStore.isAuthenticated());

  const component = useMemo(() => {
    const unauthenticated = !userStore.authenticated;
    const isAllowedForGuest = allowedOnlyToGuest.find(
      (x) => x === router.pathname,
    );
    if (isAllowedForGuest) {
      if (unauthenticated) return children;

      router.push("/");
      return children;
    }
    return unauthenticated ? <GuestMainTemplate /> : children;
  }, [userStore.authenticated, children, router]);

  return component;
}

export default WithAuthenticationHoc;

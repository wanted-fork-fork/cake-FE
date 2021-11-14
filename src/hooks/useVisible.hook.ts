import { useCallback, useState } from "react";

function useVisibleHook(defaultVisible) {
  const [visible, setVisibility] = useState(defaultVisible);
  const setVisible = useCallback(() => setVisibility(true), []);
  const setInvisible = useCallback(() => setVisibility(false), []);
  return [visible, setVisible, setInvisible];
}

export default useVisibleHook;

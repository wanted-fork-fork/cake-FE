import { useCallback, useState } from "react";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return { value, handleChange, setValue };
}

export default useInput;

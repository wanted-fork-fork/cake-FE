import { useCallback, useState } from "react";

function useDatepicker(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = useCallback((v) => {
    setValue(v);
  }, []);

  return { value, onChange };
}

export default useDatepicker;

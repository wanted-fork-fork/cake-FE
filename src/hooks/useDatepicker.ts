import { useCallback, useState } from "react";
import dayjs from "dayjs";

function useDatepicker() {
  const [value, setValue] = useState(dayjs());

  const onChange = useCallback((v) => {
    setValue(v);
  }, []);

  return { value, onChange };
}

export default useDatepicker;

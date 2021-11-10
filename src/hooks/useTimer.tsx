import { useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";

interface TimerProp {
  limit: number;
}

function useTimer({ limit }: TimerProp) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(limit / 60);
    setSeconds(limit % 60);
  }, [limit]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [limit, minutes, seconds]);

  const formatted = useMemo(
    () => dayjs().minute(minutes).second(seconds).format("mm:ss"),
    [minutes, seconds],
  );

  return { minutes, seconds, formatted };
}

export default useTimer;

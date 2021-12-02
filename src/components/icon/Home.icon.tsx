import { useMemo } from "react";
import theme from "@src/styles/theme";

function HomeIcon({ selected }) {
  const color = useMemo(
    () => (selected ? theme.color.secondary : theme.color.black),
    [selected],
  );
  const fill = useMemo(
    () => (selected ? theme.color.secondary : "none"),
    [selected],
  );
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.12033 11.6168L13.9404 4.52616C15.0466 3.63683 16.6247 3.64448 17.7223 4.54448L26.3477 11.6173C27.0426 12.1871 27.4455 13.0384 27.4455 13.9371V25.5347C27.4455 27.1915 26.1023 28.5347 24.4455 28.5347H7C5.34315 28.5347 4 27.1915 4 25.5347V13.9549C4 13.0461 4.412 12.1862 5.12033 11.6168Z"
        stroke={color}
        strokeLinecap="round"
      />
      <rect
        x="12.3569"
        y="17.8566"
        fill={fill}
        width="6.49973"
        height="10.6781"
        stroke={color}
      />
    </svg>
  );
}

export default HomeIcon;

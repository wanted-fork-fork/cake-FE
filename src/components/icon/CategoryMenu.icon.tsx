import { useMemo } from "react";
import theme from "@src/styles/theme";

function CategoryMenuIcon({ selected }) {
  const color = useMemo(
    () => (selected ? theme.color.secondary : theme.color.black),
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
      <rect x="4.5" y="3.5" width="23" height="25" rx="0.5" stroke={color} />
      <circle cx="9" cy="9" r="1" fill="#FC1150" stroke={color} />
      <path d="M12 9H24" stroke={color} strokeLinecap="round" />
      <circle cx="23" cy="16" r="1" fill="#FC1150" stroke={color} />
      <path d="M8 16H20" stroke={color} strokeLinecap="round" />
      <circle cx="9" cy="23" r="1" fill="#FC1150" stroke={color} />
      <path d="M12 23H24" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

export default CategoryMenuIcon;

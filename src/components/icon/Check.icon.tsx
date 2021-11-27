import theme from "@src/styles/theme";

function CheckIcon({ color = theme.color.primary }) {
  return (
    <svg
      width="37"
      height="34"
      viewBox="0 0 37 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 13.7424L18.28 30L35 1" stroke={color} strokeWidth="4" />
    </svg>
  );
}

export default CheckIcon;

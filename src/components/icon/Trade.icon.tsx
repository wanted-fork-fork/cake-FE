import theme from "@src/styles/theme";

function TradeIcon({ selectedMine, selectedYours }) {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7H25L20.1351 1"
        stroke={selectedMine ? theme.color.point : "#BDBDBD"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 11L3 11L7.86486 17"
        stroke={selectedYours ? theme.color.point : "#BDBDBD"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default TradeIcon;

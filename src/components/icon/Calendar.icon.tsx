function CalendarIcon({ color = "#222" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke={color} />
      <path
        d="M3.5 7C3.5 6.17157 4.17157 5.5 5 5.5H19C19.8284 5.5 20.5 6.17157 20.5 7V9.5H3.5V7Z"
        stroke={color}
      />
      <path d="M8 4V8" stroke={color} strokeLinecap="round" />
      <path d="M16 4V8" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

export default CalendarIcon;

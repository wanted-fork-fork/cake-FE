function CoinIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#FBE889" />
      <g filter="url(#filter0_i_326_3547)">
        <path
          d="M22.4001 12.0001C22.4001 17.7439 17.7439 22.4001 12.0001 22.4001C6.25634 22.4001 1.6001 17.7439 1.6001 12.0001C1.6001 6.25634 6.25634 1.6001 12.0001 1.6001C17.7439 1.6001 22.4001 6.25634 22.4001 12.0001Z"
          fill="#F7D467"
        />
      </g>
      <g filter="url(#filter1_d_326_3547)">
        <path
          d="M16 13.4194C15.8861 14.5161 15.4793 15.3871 14.7796 16.0323C14.0839 16.6774 13.1971 17 12.119 17C10.8579 17 9.85507 16.5548 9.1106 15.6645C8.3702 14.7742 8 13.5699 8 12.0516C8 10.5032 8.3702 9.27527 9.1106 8.36774C9.85507 7.45591 10.8579 7 12.119 7C13.1848 7 14.0676 7.30538 14.7674 7.91613C15.4671 8.52258 15.878 9.34624 16 10.3871H14.1205C14.0595 9.87527 13.85 9.46882 13.492 9.16774C13.1381 8.86667 12.6865 8.71613 12.1373 8.71613C11.4416 8.71613 10.8965 9.01075 10.5019 9.6C10.1073 10.1849 9.90999 10.9978 9.90999 12.0387C9.90999 13.0538 10.1053 13.8495 10.4958 14.4258C10.8904 14.9978 11.4376 15.2839 12.1373 15.2839C12.6865 15.2839 13.1381 15.1161 13.492 14.7806C13.85 14.4452 14.0595 13.9914 14.1205 13.4194H16Z"
          fill="#FBE889"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_326_3547"
          x="1.6001"
          y="1.6001"
          width="21.7998"
          height="21.7998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.952941 0 0 0 0 0.72549 0 0 0 0 0.262745 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_326_3547"
          />
        </filter>
        <filter
          id="filter1_d_326_3547"
          x="7"
          y="6"
          width="12"
          height="14"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.94902 0 0 0 0 0.698039 0 0 0 0 0.243137 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_326_3547"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_326_3547"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default CoinIcon;

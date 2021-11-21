import { useMemo } from "react";
import theme from "@src/styles/theme";

function StudyManageIcon({ selected }) {
  const color = useMemo(
    () => (selected ? theme.color.point : theme.color.black),
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
      <mask id="path-1-inside-1_288_261" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.92162 11.2948C1.41262 10.7858 1.41262 9.96054 1.92162 9.45155C2.43062 8.94255 3.25587 8.94255 3.76487 9.45155L6.06891 11.7556L6.06895 11.7556L6.29939 11.986C6.55389 12.2405 6.96652 12.2405 7.22102 11.986C7.47172 11.7353 7.47546 11.3311 7.23224 11.0759L4.68639 8.53002C4.17739 8.02102 4.17739 7.19578 4.68639 6.68678C5.19539 6.17778 6.02064 6.17778 6.52964 6.68678L8.83368 8.99082L8.83372 8.99078L9.06416 9.22123C9.31866 9.47573 9.73128 9.47573 9.98578 9.22123C10.2403 8.96673 10.2403 8.5541 9.98578 8.2996L9.75534 8.06916L9.75552 8.06899L7.45147 5.76494C6.94247 5.25594 6.94247 4.43069 7.45147 3.9217C7.96047 3.4127 8.78572 3.4127 9.29472 3.9217L12.29 6.91697C12.2949 6.9219 12.2998 6.92686 12.3046 6.93186L13.4419 8.0691C14.9891 9.61636 15.3606 11.8942 14.5561 13.7922C14.5689 13.8043 14.5816 13.8166 14.5941 13.8292L25.1927 24.4278C25.9562 25.1913 25.9562 26.4292 25.1927 27.1927C24.4292 27.9562 23.1914 27.9562 22.4279 27.1927L11.8292 16.594C11.8167 16.5815 11.8044 16.5689 11.7924 16.5562C9.89429 17.3608 7.61627 16.9894 6.06891 15.4421L4.91689 14.2901L4.22567 13.5988L1.92162 11.2948Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.92162 11.2948C1.41262 10.7858 1.41262 9.96054 1.92162 9.45155C2.43062 8.94255 3.25587 8.94255 3.76487 9.45155L6.06891 11.7556L6.06895 11.7556L6.29939 11.986C6.55389 12.2405 6.96652 12.2405 7.22102 11.986C7.47172 11.7353 7.47546 11.3311 7.23224 11.0759L4.68639 8.53002C4.17739 8.02102 4.17739 7.19578 4.68639 6.68678C5.19539 6.17778 6.02064 6.17778 6.52964 6.68678L8.83368 8.99082L8.83372 8.99078L9.06416 9.22123C9.31866 9.47573 9.73128 9.47573 9.98578 9.22123C10.2403 8.96673 10.2403 8.5541 9.98578 8.2996L9.75534 8.06916L9.75552 8.06899L7.45147 5.76494C6.94247 5.25594 6.94247 4.43069 7.45147 3.9217C7.96047 3.4127 8.78572 3.4127 9.29472 3.9217L12.29 6.91697C12.2949 6.9219 12.2998 6.92686 12.3046 6.93186L13.4419 8.0691C14.9891 9.61636 15.3606 11.8942 14.5561 13.7922C14.5689 13.8043 14.5816 13.8166 14.5941 13.8292L25.1927 24.4278C25.9562 25.1913 25.9562 26.4292 25.1927 27.1927C24.4292 27.9562 23.1914 27.9562 22.4279 27.1927L11.8292 16.594C11.8167 16.5815 11.8044 16.5689 11.7924 16.5562C9.89429 17.3608 7.61627 16.9894 6.06891 15.4421L4.91689 14.2901L4.22567 13.5988L1.92162 11.2948Z"
        fill="white"
      />
      <path
        d="M1.92162 11.2948L2.62873 10.5877L1.92162 11.2948ZM3.76487 9.45155L3.05776 10.1587L3.76487 9.45155ZM6.06891 11.7556L5.36181 12.4627L6.06891 13.1698L6.77602 12.4627L6.06891 11.7556ZM6.06895 11.7556L6.77606 11.0484L6.06895 10.3413L5.36184 11.0484L6.06895 11.7556ZM7.23224 11.0759L7.95624 10.3861L7.94789 10.3773L7.93934 10.3688L7.23224 11.0759ZM4.68639 8.53002L5.3935 7.82292L4.68639 8.53002ZM6.52964 6.68678L7.23674 5.97967L6.52964 6.68678ZM8.83368 8.99082L8.12657 9.69793L8.83368 10.405L9.54079 9.69793L8.83368 8.99082ZM8.83372 8.99078L9.54083 8.28368L8.83372 7.57657L8.12661 8.28368L8.83372 8.99078ZM9.75534 8.06916L9.04823 7.36206L8.34113 8.06916L9.04823 8.77627L9.75534 8.06916ZM9.75552 8.06899L10.4626 8.77609L11.1697 8.06899L10.4626 7.36188L9.75552 8.06899ZM7.45147 5.76494L8.15858 5.05783L7.45147 5.76494ZM12.3046 6.93186L11.5865 7.62772L11.592 7.63339L11.5975 7.63896L12.3046 6.93186ZM14.5561 13.7922L13.6354 13.402L13.3647 14.0406L13.8681 14.5179L14.5561 13.7922ZM14.5941 13.8292L13.887 14.5363L14.5941 13.8292ZM25.1927 24.4278L25.8999 23.7207L25.1927 24.4278ZM22.4279 27.1927L23.135 26.4856L22.4279 27.1927ZM11.8292 16.594L11.1221 17.3011L11.8292 16.594ZM11.7924 16.5562L12.518 15.8681L12.0407 15.3648L11.4021 15.6355L11.7924 16.5562ZM4.22567 13.5988L3.51856 14.3059L4.22567 13.5988ZM1.21452 8.74444C0.314993 9.64396 0.314993 11.1024 1.21452 12.0019L2.62873 10.5877C2.51026 10.4692 2.51026 10.2771 2.62873 10.1587L1.21452 8.74444ZM4.47197 8.74444C3.57245 7.84492 2.11404 7.84492 1.21452 8.74444L2.62873 10.1587C2.7472 10.0402 2.93929 10.0402 3.05776 10.1587L4.47197 8.74444ZM6.77602 11.0485L4.47197 8.74444L3.05776 10.1587L5.36181 12.4627L6.77602 11.0485ZM5.36184 11.0484L5.36181 11.0485L6.77602 12.4627L6.77606 12.4627L5.36184 11.0484ZM7.0065 11.2789L6.77606 11.0484L5.36184 12.4627L5.59229 12.6931L7.0065 11.2789ZM6.51391 11.2789C6.64993 11.1429 6.87047 11.1429 7.0065 11.2789L5.59229 12.6931C6.23731 13.3381 7.2831 13.3381 7.92812 12.6931L6.51391 11.2789ZM6.50824 11.7657C6.3779 11.6289 6.37981 11.413 6.51391 11.2789L7.92812 12.6931C8.56362 12.0576 8.57301 11.0334 7.95624 10.3861L6.50824 11.7657ZM3.97928 9.23713L6.52513 11.783L7.93934 10.3688L5.3935 7.82292L3.97928 9.23713ZM3.97928 5.97967C3.07976 6.87919 3.07976 8.33761 3.97928 9.23713L5.3935 7.82292C5.27502 7.70444 5.27502 7.51236 5.3935 7.39388L3.97928 5.97967ZM7.23674 5.97967C6.33722 5.08015 4.87881 5.08015 3.97928 5.97967L5.3935 7.39388C5.51197 7.27541 5.70406 7.27541 5.82253 7.39388L7.23674 5.97967ZM9.54079 8.28372L7.23674 5.97967L5.82253 7.39388L8.12657 9.69793L9.54079 8.28372ZM8.12661 8.28368L8.12657 8.28372L9.54079 9.69793L9.54083 9.69789L8.12661 8.28368ZM9.77127 8.51412L9.54083 8.28368L8.12661 9.69789L8.35705 9.92833L9.77127 8.51412ZM9.27868 8.51412C9.4147 8.37809 9.63524 8.37809 9.77127 8.51412L8.35705 9.92833C9.00208 10.5734 10.0479 10.5734 10.6929 9.92833L9.27868 8.51412ZM9.27868 9.00671C9.14265 8.87069 9.14265 8.65015 9.27868 8.51412L10.6929 9.92833C11.3379 9.28331 11.3379 8.23752 10.6929 7.5925L9.27868 9.00671ZM9.04823 8.77627L9.27868 9.00671L10.6929 7.5925L10.4624 7.36206L9.04823 8.77627ZM9.04841 7.36188L9.04823 7.36206L10.4624 8.77627L10.4626 8.77609L9.04841 7.36188ZM6.74437 6.47205L9.04841 8.77609L10.4626 7.36188L8.15858 5.05783L6.74437 6.47205ZM6.74437 3.21459C5.84484 4.11411 5.84484 5.57253 6.74437 6.47205L8.15858 5.05783C8.04011 4.93936 8.04011 4.74728 8.15858 4.6288L6.74437 3.21459ZM10.0018 3.21459C9.1023 2.31507 7.64389 2.31507 6.74437 3.21459L8.15858 4.6288C8.27705 4.51033 8.46914 4.51033 8.58761 4.6288L10.0018 3.21459ZM12.9971 6.20986L10.0018 3.21459L8.58761 4.6288L11.5829 7.62408L12.9971 6.20986ZM13.0228 6.23599C13.0143 6.22718 13.0057 6.21847 12.9971 6.20986L11.5829 7.62408C11.5841 7.62534 11.5853 7.62655 11.5865 7.62772L13.0228 6.23599ZM14.149 7.36199L13.0118 6.22475L11.5975 7.63896L12.7348 8.77621L14.149 7.36199ZM15.4769 14.1824C16.4348 11.9222 15.9941 9.20715 14.149 7.36199L12.7348 8.77621C13.9841 10.0256 14.2863 11.8662 13.6354 13.402L15.4769 14.1824ZM13.8681 14.5179C13.8744 14.5239 13.8807 14.53 13.887 14.5363L15.3012 13.1221C15.2824 13.1033 15.2634 13.0848 15.2442 13.0665L13.8681 14.5179ZM13.887 14.5363L24.4856 25.1349L25.8999 23.7207L15.3012 13.1221L13.887 14.5363ZM24.4856 25.1349C24.8586 25.5079 24.8586 26.1126 24.4856 26.4856L25.8999 27.8998C27.0539 26.7458 27.0539 24.8747 25.8999 23.7207L24.4856 25.1349ZM24.4856 26.4856C24.1127 26.8585 23.508 26.8585 23.135 26.4856L21.7208 27.8998C22.8748 29.0538 24.7458 29.0538 25.8999 27.8998L24.4856 26.4856ZM23.135 26.4856L12.5363 15.8869L11.1221 17.3011L21.7208 27.8998L23.135 26.4856ZM12.5363 15.8869C12.5301 15.8807 12.524 15.8744 12.518 15.8681L11.0668 17.2443C11.0849 17.2634 11.1034 17.2824 11.1221 17.3011L12.5363 15.8869ZM5.3618 16.1492C7.20707 17.9945 9.92234 18.4351 12.1827 17.4769L11.4021 15.6355C9.86623 16.2865 8.02546 15.9844 6.77602 14.735L5.3618 16.1492ZM4.20979 14.9972L5.3618 16.1492L6.77602 14.735L5.624 13.583L4.20979 14.9972ZM3.51856 14.3059L4.20979 14.9972L5.624 13.583L4.93277 12.8917L3.51856 14.3059ZM1.21452 12.0019L3.51856 14.3059L4.93277 12.8917L2.62873 10.5877L1.21452 12.0019Z"
        fill={color}
        mask="url(#path-1-inside-1_288_261)"
      />
      <mask id="path-3-inside-2_288_261" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5847 3.92162C23.0937 3.41262 23.919 3.41262 24.428 3.92162C24.937 4.43062 24.937 5.25587 24.428 5.76487L22.1239 8.06891L22.124 8.06895L21.8935 8.29939C21.639 8.55389 21.639 8.96652 21.8935 9.22102C22.1442 9.47172 22.5484 9.47546 22.8036 9.23224L25.3495 6.68639C25.8585 6.17739 26.6837 6.17739 27.1927 6.68639C27.7017 7.19539 27.7017 8.02064 27.1927 8.52964L24.8887 10.8337L24.8887 10.8337L24.6583 11.0642C24.4038 11.3187 24.4038 11.7313 24.6583 11.9858C24.9128 12.2403 25.3254 12.2403 25.5799 11.9858L25.8104 11.7553L25.8105 11.7555L28.1146 9.45147C28.6236 8.94247 29.4488 8.94247 29.9578 9.45147C30.4668 9.96047 30.4668 10.7857 29.9578 11.2947L26.9625 14.29C26.9576 14.2949 26.9527 14.2998 26.9477 14.3046L25.8104 15.4419C24.2632 16.9891 21.9853 17.3606 20.0873 16.5561C20.0752 16.5689 20.0629 16.5816 20.0504 16.5941L9.4517 27.1927C8.68821 27.9562 7.45033 27.9562 6.68683 27.1927C5.92334 26.4292 5.92334 25.1914 6.68683 24.4279L17.2855 13.8292C17.298 13.8167 17.3106 13.8044 17.3233 13.7924C16.5187 11.8943 16.8901 9.61627 18.4374 8.06891L19.5895 6.91689L20.2807 6.22567L22.5847 3.92162Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5847 3.92162C23.0937 3.41262 23.919 3.41262 24.428 3.92162C24.937 4.43062 24.937 5.25587 24.428 5.76487L22.1239 8.06891L22.124 8.06895L21.8935 8.29939C21.639 8.55389 21.639 8.96652 21.8935 9.22102C22.1442 9.47172 22.5484 9.47546 22.8036 9.23224L25.3495 6.68639C25.8585 6.17739 26.6837 6.17739 27.1927 6.68639C27.7017 7.19539 27.7017 8.02064 27.1927 8.52964L24.8887 10.8337L24.8887 10.8337L24.6583 11.0642C24.4038 11.3187 24.4038 11.7313 24.6583 11.9858C24.9128 12.2403 25.3254 12.2403 25.5799 11.9858L25.8104 11.7553L25.8105 11.7555L28.1146 9.45147C28.6236 8.94247 29.4488 8.94247 29.9578 9.45147C30.4668 9.96047 30.4668 10.7857 29.9578 11.2947L26.9625 14.29C26.9576 14.2949 26.9527 14.2998 26.9477 14.3046L25.8104 15.4419C24.2632 16.9891 21.9853 17.3606 20.0873 16.5561C20.0752 16.5689 20.0629 16.5816 20.0504 16.5941L9.4517 27.1927C8.68821 27.9562 7.45033 27.9562 6.68683 27.1927C5.92334 26.4292 5.92334 25.1914 6.68683 24.4279L17.2855 13.8292C17.298 13.8167 17.3106 13.8044 17.3233 13.7924C16.5187 11.8943 16.8901 9.61627 18.4374 8.06891L19.5895 6.91689L20.2807 6.22567L22.5847 3.92162Z"
        fill="white"
      />
      <path
        d="M24.428 5.76487L23.7209 5.05776L24.428 5.76487ZM22.1239 8.06891L21.4168 7.36181L20.7097 8.06891L21.4168 8.77602L22.1239 8.06891ZM22.124 8.06895L22.8311 8.77606L23.5382 8.06895L22.8311 7.36184L22.124 8.06895ZM22.8036 9.23224L23.4934 9.95624L23.5022 9.94789L23.5108 9.93934L22.8036 9.23224ZM25.3495 6.68639L26.0566 7.3935L25.3495 6.68639ZM27.1927 8.52964L27.8998 9.23674L27.1927 8.52964ZM24.8887 10.8337L24.1816 10.1266L23.4745 10.8337L24.1816 11.5408L24.8887 10.8337ZM24.8887 10.8337L25.5958 11.5408L26.3029 10.8337L25.5958 10.1266L24.8887 10.8337ZM25.5799 11.9858L24.8728 11.2787L25.5799 11.9858ZM25.8104 11.7553L26.5175 11.0482L25.8104 10.3411L25.1032 11.0482L25.8104 11.7553ZM25.8105 11.7555L25.1034 12.4626L25.8105 13.1697L26.5176 12.4626L25.8105 11.7555ZM29.9578 11.2947L29.2507 10.5876L29.9578 11.2947ZM26.9625 14.29L27.6697 14.9971L26.9625 14.29ZM26.9477 14.3046L26.2518 13.5865L26.2461 13.592L26.2406 13.5975L26.9477 14.3046ZM25.8104 15.4419L25.1033 14.7348L25.8104 15.4419ZM20.0873 16.5561L20.4775 15.6354L19.8389 15.3647L19.3617 15.8681L20.0873 16.5561ZM6.68683 24.4279L5.97973 23.7208L6.68683 24.4279ZM17.2855 13.8292L17.9926 14.5363L17.2855 13.8292ZM17.3233 13.7924L18.0115 14.518L18.5148 14.0407L18.244 13.4021L17.3233 13.7924ZM25.1351 3.21452C24.2356 2.31499 22.7771 2.31499 21.8776 3.21452L23.2918 4.62873C23.4103 4.51026 23.6024 4.51026 23.7209 4.62873L25.1351 3.21452ZM25.1351 6.47197C26.0346 5.57245 26.0346 4.11404 25.1351 3.21452L23.7209 4.62873C23.8393 4.7472 23.8393 4.93929 23.7209 5.05776L25.1351 6.47197ZM22.831 8.77602L25.1351 6.47197L23.7209 5.05776L21.4168 7.36181L22.831 8.77602ZM22.8311 7.36184L22.831 7.36181L21.4168 8.77602L21.4169 8.77606L22.8311 7.36184ZM22.6006 9.0065L22.8311 8.77606L21.4169 7.36184L21.1864 7.59229L22.6006 9.0065ZM22.6006 8.51391C22.7367 8.64993 22.7367 8.87047 22.6006 9.0065L21.1864 7.59229C20.5414 8.23731 20.5414 9.2831 21.1864 9.92812L22.6006 8.51391ZM22.1138 8.50824C22.2506 8.3779 22.4665 8.37981 22.6006 8.51391L21.1864 9.92812C21.8219 10.5636 22.8461 10.573 23.4934 9.95624L22.1138 8.50824ZM24.6424 5.97928L22.0965 8.52513L23.5108 9.93934L26.0566 7.3935L24.6424 5.97928ZM27.8998 5.97928C27.0003 5.07976 25.5419 5.07976 24.6424 5.97928L26.0566 7.3935C26.1751 7.27502 26.3672 7.27502 26.4856 7.3935L27.8998 5.97928ZM27.8998 9.23674C28.7994 8.33722 28.7994 6.87881 27.8998 5.97928L26.4856 7.3935C26.6041 7.51197 26.6041 7.70406 26.4856 7.82253L27.8998 9.23674ZM25.5958 11.5408L27.8998 9.23674L26.4856 7.82253L24.1816 10.1266L25.5958 11.5408ZM25.5958 10.1266L25.5958 10.1266L24.1816 11.5408L24.1816 11.5408L25.5958 10.1266ZM25.3654 11.7713L25.5958 11.5408L24.1816 10.1266L23.9512 10.3571L25.3654 11.7713ZM25.3654 11.2787C25.5014 11.4147 25.5014 11.6352 25.3654 11.7713L23.9512 10.3571C23.3062 11.0021 23.3062 12.0479 23.9512 12.6929L25.3654 11.2787ZM24.8728 11.2787C25.0088 11.1427 25.2294 11.1427 25.3654 11.2787L23.9512 12.6929C24.5962 13.3379 25.642 13.3379 26.287 12.6929L24.8728 11.2787ZM25.1032 11.0482L24.8728 11.2787L26.287 12.6929L26.5175 12.4624L25.1032 11.0482ZM26.5176 11.0484L26.5175 11.0482L25.1032 12.4624L25.1034 12.4626L26.5176 11.0484ZM27.4075 8.74437L25.1034 11.0484L26.5176 12.4626L28.8217 10.1586L27.4075 8.74437ZM30.6649 8.74437C29.7654 7.84484 28.307 7.84484 27.4075 8.74437L28.8217 10.1586C28.9402 10.0401 29.1322 10.0401 29.2507 10.1586L30.6649 8.74437ZM30.6649 12.0018C31.5644 11.1023 31.5644 9.64389 30.6649 8.74437L29.2507 10.1586C29.3692 10.2771 29.3692 10.4691 29.2507 10.5876L30.6649 12.0018ZM27.6697 14.9971L30.6649 12.0018L29.2507 10.5876L26.2554 13.5829L27.6697 14.9971ZM27.6435 15.0228C27.6523 15.0143 27.661 15.0057 27.6697 14.9971L26.2554 13.5829C26.2542 13.5841 26.253 13.5853 26.2518 13.5865L27.6435 15.0228ZM26.5175 16.149L27.6548 15.0118L26.2406 13.5975L25.1033 14.7348L26.5175 16.149ZM19.6971 17.4769C21.9573 18.4348 24.6724 17.9941 26.5175 16.149L25.1033 14.7348C23.8539 15.9841 22.0133 16.2863 20.4775 15.6354L19.6971 17.4769ZM19.3617 15.8681C19.3556 15.8744 19.3495 15.8807 19.3433 15.887L20.7575 17.3012C20.7763 17.2824 20.7948 17.2634 20.813 17.2442L19.3617 15.8681ZM19.3433 15.887L8.74459 26.4856L10.1588 27.8999L20.7575 17.3012L19.3433 15.887ZM8.74459 26.4856C8.37162 26.8586 7.76691 26.8586 7.39394 26.4856L5.97973 27.8999C7.13375 29.0539 9.00479 29.0539 10.1588 27.8999L8.74459 26.4856ZM7.39394 26.4856C7.02097 26.1127 7.02097 25.508 7.39394 25.135L5.97973 23.7208C4.82571 24.8748 4.82571 26.7458 5.97973 27.8999L7.39394 26.4856ZM7.39394 25.135L17.9926 14.5363L16.5784 13.1221L5.97973 23.7208L7.39394 25.135ZM17.9926 14.5363C17.9988 14.5301 18.0051 14.524 18.0115 14.518L16.6352 13.0668C16.6161 13.0849 16.5971 13.1034 16.5784 13.1221L17.9926 14.5363ZM17.7303 7.3618C15.8851 9.20707 15.4445 11.9223 16.4027 14.1827L18.244 13.4021C17.593 11.8662 17.8951 10.0255 19.1445 8.77602L17.7303 7.3618ZM18.8823 6.20979L17.7303 7.3618L19.1445 8.77602L20.2966 7.624L18.8823 6.20979ZM19.5736 5.51856L18.8823 6.20979L20.2966 7.624L20.9878 6.93277L19.5736 5.51856ZM21.8776 3.21452L19.5736 5.51856L20.9878 6.93277L23.2918 4.62873L21.8776 3.21452Z"
        fill={color}
        mask="url(#path-3-inside-2_288_261)"
      />
    </svg>
  );
}

export default StudyManageIcon;
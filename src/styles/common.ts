import { css } from "styled-components";
import { MyThemeProps } from "@src/styles/theme";

export const MarginBottom = css`
  margin-bottom: ${(props: MyThemeProps) => props.mb};
`;

export default {
  MarginBottom,
};

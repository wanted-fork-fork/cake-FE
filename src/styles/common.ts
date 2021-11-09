import { css, DefaultTheme, ThemeProps } from "styled-components";
import { FontSize } from "@src/styles/theme";

export interface BaseProps extends ThemeProps<DefaultTheme> {
  mb?: string;
  pt?: string;
  fontSize?: "small" | "default" | "large";
}

export const BaseMarginBottom = css`
  margin-bottom: ${(props: BaseProps) => props.mb};
`;

export const BasePaddingTop = css`
  padding-top: ${(props: BaseProps) => props.pt};
`;

export const BaseFontSize = css`
  font-size: ${({ fontSize }: BaseProps) => {
    switch (fontSize) {
      case "large":
        return FontSize.PrimaryLabel;
      case "default":
        return FontSize.Default;
      case "small":
        return FontSize.Small;
      default:
        return FontSize.Default;
    }
  }};
`;

export const NoScroll = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const BaseStyleProps = css`
  ${BasePaddingTop};
  ${BaseMarginBottom};
  ${BaseFontSize};
`;

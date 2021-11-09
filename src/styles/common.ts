import { css, DefaultTheme, ThemeProps } from "styled-components";
import { FontSize } from "@src/styles/theme";

export interface BaseProps extends ThemeProps<DefaultTheme> {
  mb?: string;
  fontSize?: "small" | "default" | "large";
}

export const BaseMarginBottom = css`
  margin-bottom: ${(props: BaseProps) => props.mb};
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

export const BaseStyleProps = css`
  ${BaseMarginBottom};
  ${BaseFontSize};
`;

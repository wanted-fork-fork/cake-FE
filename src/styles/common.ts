import { css, DefaultTheme, ThemeProps } from "styled-components";
import theme, { FontSize } from "@src/styles/theme";

export interface BaseProps extends ThemeProps<DefaultTheme> {
  mb?: string;
  pt?: string;
  fontSize?: "small" | "default" | "large";
  height?: string;
}

export const BaseMarginBottom = css`
  margin-bottom: ${(props: BaseProps) => props.mb};
`;

export const BasePaddingTop = css`
  padding-top: ${(props: BaseProps) => props.pt};
`;

export const BaseHeight = css`
  height: ${(props: BaseProps) => props.height};
`;

export const BaseFontSize = css`
  font-size: ${({ fontSize }: BaseProps) => {
    switch (fontSize) {
      case "large":
        return FontSize.PrimaryLabel;
      case "default":
        return FontSize.Default;
      case "small":
        return FontSize.PrimaryDescription;
      default:
        return FontSize.Default;
    }
  }};
`;

export const Underline = css`
  border: none;
  border-bottom: 3px solid ${theme.color.primary};
  border-radius: 0;
  font-weight: 400;
  padding: 15px 10px;

  text-align: inherit;

  &:focus {
    border-color: ${theme.color.primary};
  }
`;

export const LightUnderline = css`
  border: none;
  text-align: inherit;
  border-radius: 0;

  padding: 10px 10px;
  border-bottom: 1px solid ${theme.color.gray3};
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
  ${BaseHeight};
`;

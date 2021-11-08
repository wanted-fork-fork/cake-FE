import styled, { css } from "styled-components";
import { FontFamily, FontSize, MyThemeProps } from "@src/styles/theme";
import { MarginBottom } from "@src/styles/common";

const Container = styled.div<MyThemeProps>`
  ${MarginBottom}
`;

const MainText = css`
  ${MarginBottom};

  color: #fff;
  font-family: ${FontFamily.point};
  user-select: none;
`;

const MainTitle = styled.h1<MyThemeProps>`
  ${MainText};
  font-size: ${FontSize.MainTitle};
  font-weight: 500;
  line-height: 2.156rem;
`;

const MainDescription = styled.h3`
  ${MainText};
  font-size: ${FontSize.SubTitle};
  font-weight: 500;
`;

const Strong = styled.strong`
  ${MainText};
  font-size: ${FontSize.MainTitleStrong};
  font-weight: 700;
`;

const FirstLetter = styled.span`
  ${MainText};
  font-size: 1.875rem;
`;

const S = {
  Container,
  MainTitle,
  Strong,
  MainDescription,
  FirstLetter,
};

type Props = {
  mb: string;
};

function AppTitleComponent({ mb = "0" }: Props) {
  return (
    <S.Container mb={mb}>
      <S.MainTitle mb="40px">
        재능교환?
        <br />A piece of{" "}
        <S.Strong>
          <S.FirstLetter>C</S.FirstLetter>ake
        </S.Strong>{" "}
        이지
      </S.MainTitle>
      <S.MainDescription>
        우리 학교 재능공유 플랫폼 Cake<i>!</i>
      </S.MainDescription>
    </S.Container>
  );
}

export default AppTitleComponent;

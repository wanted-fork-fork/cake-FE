import styled, { css } from "styled-components";
import { FontFamily, FontSize } from "@src/styles/theme";
import { BaseMarginBottom, BaseProps } from "@src/styles/common";

const Container = styled.div<BaseProps>`
  ${BaseMarginBottom}
`;

const MainText = css`
  ${BaseMarginBottom};

  color: #fff;
  font-family: ${FontFamily.point};
  user-select: none;
`;

const MainTitle = styled.h1<BaseProps>`
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

const S = {
  Container,
  MainTitle,
  Strong,
  MainDescription,
};

type Props = {
  mb: string;
};

function AppTitleComponent({ mb = "0" }: Props) {
  return (
    <S.Container mb={mb}>
      <S.MainTitle mb="20px">
        재능교환?
        <br />A piece of <S.Strong>Cake</S.Strong> 이지
      </S.MainTitle>
      <S.MainDescription>
        우리 학교 재능공유 플랫폼 Cake<i>!</i>
      </S.MainDescription>
    </S.Container>
  );
}

export default AppTitleComponent;

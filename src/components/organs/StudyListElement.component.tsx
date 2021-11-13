import styled from "styled-components";

// components
import { StudyListElement } from "@src/models/dto/study.dto";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import Image from "@src/components/atoms/Image";

export interface StudyListElementComponentProps {
  study: StudyListElement;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 100%;
  cursor: pointer;
  user-select: none;
  padding: ${Padding.pageX};
`;
const ContentsWrapper = styled.div`
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: ${FontSize.PrimaryDescription};
    margin-bottom: 5px;
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;

  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
  }
`;
const S = {
  Container,
  ContentsWrapper,

  ImageWrapper,
};
function StudyListElementComponent({ study }: StudyListElementComponentProps) {
  return (
    <S.Container key={study.id}>
      <S.ContentsWrapper>
        <h3>{study.title}</h3>
        <StudyInfoComponent study={study} />
      </S.ContentsWrapper>
      <S.ImageWrapper>
        <Image src={study.img} alt={study.title} height={100} />
      </S.ImageWrapper>
    </S.Container>
  );
}

export default StudyListElementComponent;

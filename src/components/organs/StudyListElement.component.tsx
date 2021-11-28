import styled from "styled-components";
import Link from "next/link";

// components
import { StudyListElement } from "@src/models/dto/study.dto";
import StudyInfoComponent from "@src/components/molecules/StudyInfo.component";

// styles
import { FontSize, Padding } from "@src/styles/theme";
import Image from "@src/components/atoms/Image";

export interface StudyListElementComponentProps {
  study: StudyListElement;
}

export const StudyListElementContainer = styled.div`
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
  Container: StudyListElementContainer,
  ContentsWrapper,

  ImageWrapper,
};
function StudyListElementComponent({ study }: StudyListElementComponentProps) {
  return (
    <Link href={`/study/${study.id}`}>
      <a>
        <S.Container key={study.id}>
          <S.ContentsWrapper>
            <h3>{study.title}</h3>
            <StudyInfoComponent study={study} />
          </S.ContentsWrapper>
          <S.ImageWrapper>
            <Image
              src={study.img || "/img/default-thumbnail.png"}
              alt={study.title}
              height={100}
            />
          </S.ImageWrapper>
        </S.Container>
      </a>
    </Link>
  );
}

export default StudyListElementComponent;

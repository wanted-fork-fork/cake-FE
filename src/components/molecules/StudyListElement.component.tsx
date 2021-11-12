import { useMemo } from "react";
import styled from "styled-components";

// components
import { StudyListElement } from "@src/models/dto/study.dto";
import PersonIcon from "@src/components/icon/Person.icon";
import ColoredCalendarIcon from "@src/components/icon/ColoredCalendar.icon";

// utils
import { dateToFormatted } from "@src/utils/dayjs.util";

// styles
import theme, { FontSize } from "@src/styles/theme";

export interface StudyListElementComponentProps {
  study: StudyListElement;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 100px;
  width: 100%;
`;
const ContentsWrapper = styled.div`
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: ${FontSize.PrimaryDescription};
    margin-bottom: 5px;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: ${FontSize.Small};
`;
const IconPrefixWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 15px;
  svg {
    margin-right: 5px;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Category = styled.span`
  font-size: ${FontSize.Small};
  padding-top: 2px;

  &:not(:last-child) {
    ::after {
      content: ",";
      margin-right: 4px;
    }
  }
`;
const CategoryTypeTag = styled.span`
  background-color: ${theme.color.point};
  color: #fff;
  font-weight: 700;
  font-size: ${FontSize.Small};
  text-align: center;
  padding-top: 2px;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  margin-right: 7px;
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
  InfoWrapper,
  IconPrefixWrapper,
  CategoryWrapper,
  CategoryTypeTag,
  Category,
  ImageWrapper,
};
function StudyListElementComponent({ study }: StudyListElementComponentProps) {
  const date = useMemo(
    () =>
      `${dateToFormatted(study.startDate)} - ${dateToFormatted(study.endDate)}`,
    [study],
  );
  return (
    <S.Container key={study.id}>
      <S.ContentsWrapper>
        <h3>{study.title}</h3>
        <S.InfoWrapper>
          <S.IconPrefixWrapper>
            <PersonIcon />
            <span>{study.peopleCnt}명</span>
          </S.IconPrefixWrapper>
          <S.IconPrefixWrapper>
            <ColoredCalendarIcon />
            <span>{date}</span>
          </S.IconPrefixWrapper>
        </S.InfoWrapper>
        <S.CategoryWrapper>
          <S.CategoryTypeTag>GIVE</S.CategoryTypeTag>
          {study.give.map((x) => (
            <Category key={x}>{x}</Category>
          ))}
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <S.CategoryTypeTag>TAKE</S.CategoryTypeTag>
          {study.take.map((x) => (
            <S.Category key={x}>{x}</S.Category>
          ))}
        </S.CategoryWrapper>
      </S.ContentsWrapper>
      <S.ImageWrapper>
        <img src={study.img} alt={study.title} height={100} />
      </S.ImageWrapper>
    </S.Container>
  );
}

export default StudyListElementComponent;

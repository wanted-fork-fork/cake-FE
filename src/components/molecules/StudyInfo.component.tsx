import PersonIcon from "@src/components/icon/Person.icon";
import ColoredCalendarIcon from "@src/components/icon/ColoredCalendar.icon";
import styled from "styled-components";
import theme, { FontSize } from "@src/styles/theme";
import { useMemo } from "react";
import { dateToFormatted } from "@src/utils/dayjs.util";
import { Category } from "@src/components/atoms/Category";

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
  font-size: ${FontSize.Small};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CategoryTypeTag = styled.span`
  background-color: ${theme.color.secondary};
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

const S = {
  InfoWrapper,
  IconPrefixWrapper,
  CategoryWrapper,
  CategoryTypeTag,
};
function StudyInfoComponent({ study }) {
  const date = useMemo(
    () =>
      study.startDate && study.endDate
        ? `${dateToFormatted(study.startDate)} - ${dateToFormatted(
            study.endDate,
          )}`
        : "협의 후 결정",
    [study],
  );
  const people = useMemo(() => `${study.peopleCnt || 1}명`, [study]);

  return (
    <div>
      <S.InfoWrapper>
        <S.IconPrefixWrapper>
          <PersonIcon />
          <span>{people}</span>
        </S.IconPrefixWrapper>
        <S.IconPrefixWrapper>
          <ColoredCalendarIcon />
          <span>{date}</span>
        </S.IconPrefixWrapper>
      </S.InfoWrapper>
      <S.CategoryWrapper>
        <S.CategoryTypeTag>GIVE</S.CategoryTypeTag>
        {study.give.length === 0 ? "아직 없어요" : ""}
        {study.give.map((x) => (
          <Category key={`${study.id}-${x}`}>{x}</Category>
        ))}
      </S.CategoryWrapper>
      <S.CategoryWrapper>
        <S.CategoryTypeTag>TAKE</S.CategoryTypeTag>
        {study.take.length === 0 ? "다 좋아요!" : ""}
        {study.take.map((x) => (
          <Category key={`${study.id}-${x}`}>{x}</Category>
        ))}
      </S.CategoryWrapper>
    </div>
  );
}

export default StudyInfoComponent;

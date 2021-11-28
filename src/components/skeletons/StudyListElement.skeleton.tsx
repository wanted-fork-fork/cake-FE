import { Skeleton } from "antd";
import { StudyListElementContainer } from "@src/components/organs/StudyListElement.component";
import PersonIcon from "@src/components/icon/Person.icon";
import ColoredCalendarIcon from "@src/components/icon/ColoredCalendar.icon";
import { CategoryTypeTag } from "@src/components/molecules/StudyInfo.component";
import styled from "styled-components";
import { memo } from "react";
import { BoldDivider } from "@src/components/atoms/Divider";
import { BaseProps, BaseStyleProps } from "@src/styles/common";

const { Input: SInput } = Skeleton;

const Wrapper = styled.div<BaseProps>`
  ${BaseStyleProps};
  display: flex;
  align-items: center;
  gap: 5px;
`;
function StudyListElementSkeleton() {
  return (
    <>
      <StudyListElementContainer>
        <div>
          <SInput
            size="small"
            style={{ width: "180px", marginBottom: "5px", height: "20px" }}
            active
          />
          <Wrapper mb="5px">
            <PersonIcon />
            <SInput
              size="small"
              style={{ width: "30px", height: "20px", marginRight: "5px" }}
              active
            />
            <ColoredCalendarIcon />
            <SInput
              size="small"
              style={{ width: "60px", height: "20px" }}
              active
            />
          </Wrapper>
          <Wrapper mb="5px">
            <CategoryTypeTag>GIVE</CategoryTypeTag>
            <SInput
              size="small"
              style={{ width: "80px", height: "20px" }}
              active
            />
          </Wrapper>
          <Wrapper>
            <CategoryTypeTag>TAKE</CategoryTypeTag>
            <SInput
              size="small"
              style={{ width: "70px", height: "20px" }}
              active
            />
          </Wrapper>
        </div>
        <Skeleton.Image
          style={{ width: "100px", height: "100px", borderRadius: "6px" }}
        />
      </StudyListElementContainer>
      <BoldDivider />
    </>
  );
}

export default memo(StudyListElementSkeleton);

import { BoldDivider, LightDivider } from "@src/components/atoms/Divider";
import { useEffect, useMemo, useRef } from "react";
import StudyListElementComponent from "@src/components/organs/StudyListElement.component";
import useIntersectionObserver from "@src/hooks/useIntersectionObserver.hook";
import styled from "styled-components";
import StudyListElementSkeleton from "@src/components/skeletons/StudyListElement.skeleton";

const ListWrapper = styled.div`
  min-height: 70vh;
`;
const ThresholdWrapper = styled.div`
  height: 20px;
`;
function StudyListComponent({ studyList, hasMore, loading, onClickNext }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0 }, !hasMore);

  useEffect(
    () => !loading && hasMore && entry && onClickNext(),
    [loading, hasMore, entry, onClickNext],
  );

  const studyListDom = useMemo(
    () =>
      studyList.map((study, index) => {
        const elements = [];
        elements.push(
          <div key={study.id}>
            <StudyListElementComponent study={study} />
          </div>,
        );
        if (index < studyList.length - 1)
          elements.push(<BoldDivider key={`${study.id}-div`} />);
        return elements;
      }),
    [studyList],
  );

  return (
    <ListWrapper>
      {(loading || studyList.length > 0) && <LightDivider />}
      <ListWrapper>
        {studyListDom}
        {loading && (
          <>
            <StudyListElementSkeleton />
            <StudyListElementSkeleton />
            <StudyListElementSkeleton />
            <StudyListElementSkeleton />
          </>
        )}
      </ListWrapper>
      <ThresholdWrapper ref={ref} />
    </ListWrapper>
  );
}

export default StudyListComponent;

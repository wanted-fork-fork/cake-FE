import { BoldDivider, LightDivider } from "@src/components/atoms/Divider";
import { TextButton } from "@src/components/atoms/TextButton";
import { useMemo } from "react";
import StudyListElementComponent from "@src/components/organs/StudyListElement.component";

function StudyListComponent({ studyList, hasMore, onClickNext }) {
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
    <div>
      <LightDivider />
      <div>{studyListDom}</div>
      <LightDivider my="20px" />
      {hasMore && (
        <TextButton fontSize="small" onClick={onClickNext}>
          더보기
        </TextButton>
      )}
    </div>
  );
}

export default StudyListComponent;

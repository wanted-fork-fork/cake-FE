// lib
import {
  NaviType,
  StudyManageType,
  StudyManageTypeToLabel,
} from "@src/constant/enum.constant";

// components
import { Button } from "@src/components/atoms/Button";
import StudyManageListElementComponent from "@src/components/organs/StudyManageListElement.component";
import styled from "styled-components";
import { BoldDivider } from "@src/components/atoms/Divider";
import BottomNavigationComponent from "@src/components/organs/BottomNavigation.component";
import { NoScroll } from "@src/styles/common";
import { Padding } from "@src/styles/theme";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import useQueryPusher from "@src/hooks/useQueryPusher.hook";

const Container = styled.div`
  height: 100vh;
  overflow: auto;
  padding-top: 20px;
  padding-bottom: 80px;
  ${NoScroll};
`;

const HeadWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 0 ${Padding.pageX};
  margin-bottom: 20px;
`;
function MyStudyListTemplate({ studyList = [] }) {
  const router = useRouter();
  const handleChangeQuery = useQueryPusher();

  const type = useMemo(
    () => router.query.type || StudyManageType.MINE,
    [router],
  );
  const onClickMine = useCallback(
    () => handleChangeQuery({ type: StudyManageType.MINE }),
    [handleChangeQuery],
  );
  const onClickOther = useCallback(
    () => handleChangeQuery({ type: StudyManageType.OTHER }),
    [handleChangeQuery],
  );

  const studyListDOM = useMemo(
    () =>
      studyList.map((x, index) => (
        <div key={x.id}>
          <StudyManageListElementComponent study={x} />
          {index < studyList.length - 1 && <BoldDivider />}
        </div>
      )),
    [studyList],
  );

  return (
    <Container>
      <HeadWrapper>
        <Button
          color={type === StudyManageType.MINE ? "point" : "gray"}
          height="48px"
          shape="full-rounded"
          fontSize="small"
          onClick={onClickMine}
        >
          {StudyManageTypeToLabel[StudyManageType.MINE]}
        </Button>
        <Button
          color={type === StudyManageType.OTHER ? "point" : "gray"}
          height="48px"
          shape="full-rounded"
          fontSize="small"
          onClick={onClickOther}
        >
          {StudyManageTypeToLabel[StudyManageType.OTHER]}
        </Button>
      </HeadWrapper>
      <div>{studyListDOM}</div>
      <BottomNavigationComponent selected={NaviType.STUDY} />
    </Container>
  );
}

export default MyStudyListTemplate;

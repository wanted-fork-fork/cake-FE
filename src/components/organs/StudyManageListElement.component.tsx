import Link from "next/link";

import StudyListElementComponent from "@src/components/organs/StudyListElement.component";
import { LightDivider } from "@src/components/atoms/Divider";
import { Button } from "@src/components/atoms/Button";
import {
  StudyState,
  StudyStateToManageButtonLabel,
} from "@src/constant/enum.constant";
import styled from "styled-components";
import { Padding } from "@src/styles/theme";
import { useMemo } from "react";
import SimpleProfileComponent from "@src/components/molecules/SimpleProfile.component";

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px ${Padding.pageX};
`;

function StudyManageListElementComponent({ study }) {
  const buttonColor = useMemo(() => {
    switch (study.state) {
      case StudyState.CREATED:
      case StudyState.JOINED:
        return "point";
      case StudyState.REJECTED:
      case StudyState.APPLIED:
        return "gray";
      default:
        return "gray";
    }
  }, [study.state]);

  return (
    <div>
      <StudyListElementComponent study={study} />
      <LightDivider mx={Padding.pageX} />
      <BottomWrapper>
        <div>{study.user && <SimpleProfileComponent user={study.user} />}</div>
        <Link href={`/study/manage/${study.id}`}>
          <a>
            <Button
              color={buttonColor}
              fontSize="small"
              width="100px"
              height="36px"
              shape="full-rounded"
            >
              {StudyStateToManageButtonLabel[study.state]}
            </Button>
          </a>
        </Link>
      </BottomWrapper>
    </div>
  );
}

export default StudyManageListElementComponent;

import { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";

// lib
import { StudyDetailDto } from "@src/models/dto/study.dto";
import { useStores } from "@src/store/root.store";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";

// components
import StudyDetailTemplate from "@src/templates/StudyDetail.template";

function StudyDetailPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [studyDetail, setStudyDetail] = useState<StudyDetailDto>(null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const idToNum = parseInt(id?.toString(), 10);
      studyStore.getStudyDetail(idToNum).then((std) => setStudyDetail(std));
    }
  }, [router.query, studyStore]);

  return <StudyDetailTemplate study={studyDetail} />;
}

export default memo(StudyDetailPage);
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

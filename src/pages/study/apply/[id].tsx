import StudyJoinFormTemplate from "@src/templates/StudyJoinForm.template";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { StudyDetailDto } from "@src/models/dto/study.dto";

function ApplyStudyPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [studyDetail, setStudyDetail] = useState<StudyDetailDto>(null);

  useEffect(() => {
    const { id = "1" } = router.query;
    const idToNum = parseInt(id.toString(), 10);
    studyStore.getStudyDetail(idToNum).then((std) => setStudyDetail(std));
  }, [router.query, studyStore]);

  const onSubmit = useCallback(
    async (contents) => {
      await studyStore.applyStudy(studyDetail.id, contents, []);
    },
    [studyDetail, studyStore],
  );

  return <StudyJoinFormTemplate study={studyDetail} onSubmit={onSubmit} />;
}

export default ApplyStudyPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

import StudyDetailTemplate from "@src/templates/StudyDetail.template";
import { useEffect, useState } from "react";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import StudyApplyDetailTemplate from "@src/templates/StudyApplyDetail.template";

function StudyApplyDetailPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (router.query.id)
      studyStore
        .findStudyMemberDetail(router.query.id)
        .then((res) => setDetail(res));
  }, [router.query.id, studyStore]);

  return <StudyApplyDetailTemplate applyDetail={detail} />;
}

export default StudyApplyDetailPage;

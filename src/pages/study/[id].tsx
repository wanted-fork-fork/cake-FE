import StudyDetailTemplate from "@src/templates/StudyDetail.template";
import { useStores } from "@src/store/root.store";
import { useEffect, useState } from "react";
import { StudyDetailDto } from "@src/models/dto/study.dto";
import { useRouter } from "next/router";

function StudyDetailPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [studyDetail, setStudyDetail] = useState<StudyDetailDto>(null);

  useEffect(() => {
    const { id = "1" } = router.query;
    const idToNum = parseInt(id.toString(), 10);
    studyStore.getStudyDetail(idToNum).then((std) => setStudyDetail(std));
  }, [router.query, studyStore]);

  return <StudyDetailTemplate study={studyDetail} />;
}

export default StudyDetailPage;

import StudyJoinFormTemplate from "@src/templates/StudyJoinForm.template";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { StudyDetailDto } from "@src/models/dto/study.dto";
import usePreventRouteChangeIf from "@src/hooks/usePreventRouteChangeIf.hook";
import useInput from "@src/hooks/useInput.hook";
import { Resource } from "@src/models/dto/api-response";

function ApplyStudyPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [studyDetail, setStudyDetail] = useState<StudyDetailDto>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const { value: contents, handleChange: handleChangeContents } = useInput("");
  const [uploaded, setUploaded] = useState<Resource[]>([]);

  usePreventRouteChangeIf(!submitted, null);

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const idToNum = parseInt(id.toString(), 10);
      studyStore.getStudyDetail(idToNum).then((std) => setStudyDetail(std));
    }
  }, [router.query, studyStore]);

  const onSubmit = useCallback(async () => {
    await studyStore.applyStudy(
      studyDetail.id,
      contents,
      uploaded.map((x) => x.path),
    );
    setSubmitted(true);
  }, [contents, studyDetail, studyStore, uploaded]);

  return (
    <StudyJoinFormTemplate
      study={studyDetail}
      onSubmit={onSubmit}
      contents={contents}
      handleChangeContents={handleChangeContents}
      uploaded={uploaded}
      setUploaded={setUploaded}
    />
  );
}

export default ApplyStudyPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

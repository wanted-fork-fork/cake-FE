import { useCallback, useEffect, useState } from "react";
import { useStores } from "@src/store/root.store";
import { useRouter } from "next/router";
import StudyApplyDetailTemplate from "@src/templates/StudyApplyDetail.template";
import { StudyState } from "@src/constant/enum.constant";
import useVisibleHook from "@src/hooks/useVisible.hook";

function StudyApplyDetailPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const [detail, setDetail] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible, setPopupInvisible] =
    useVisibleHook(false);

  useEffect(() => {
    if (router.query.id)
      studyStore
        .findStudyMemberDetail(router.query.id)
        .then((res) => setDetail(res));
  }, [router.query.id, studyStore]);

  const onClickApproval = useCallback(
    (nextState: StudyState) => {
      studyStore
        .approveStudyMember(detail.studyMemberId, nextState)
        .then((res) => {
          setPopupMessage(res);
          setPopupVisible();
          setDetail({ ...detail, state: nextState });
        });
    },
    [detail, setPopupVisible, studyStore],
  );

  return (
    <StudyApplyDetailTemplate
      applyDetail={detail}
      onClickApproval={onClickApproval}
      popupVisible={popupVisible}
      onClosePopup={setPopupInvisible}
      popupMessage={popupMessage}
    />
  );
}

export default StudyApplyDetailPage;

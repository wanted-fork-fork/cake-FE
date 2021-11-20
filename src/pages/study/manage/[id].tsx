import StudyApplierListTemplate from "@src/templates/StudyApplierList.template";
import { useStores } from "@src/store/root.store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function StudyApplierListPage() {
  const router = useRouter();
  const { studyStore } = useStores();

  const [applierList, setApplierList] = useState([]);

  useEffect(() => {
    if (router.query.id)
      studyStore
        .findAllStudyMember(router.query.id)
        .then((list) => setApplierList(list));
  }, [router.query.id, studyStore]);

  return <StudyApplierListTemplate applierList={applierList} />;
}

export default StudyApplierListPage;

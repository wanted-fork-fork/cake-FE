import StudyApplierListTemplate from "@src/templates/StudyApplierList.template";
import { useStores } from "@src/store/root.store";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function StudyApplierListPage() {
  const router = useRouter();
  const { studyStore } = useStores();

  const [applierList, setApplierList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (router.query.id)
      studyStore.findAllStudyMember(router.query.id).then((list) => {
        setApplierList(list);
        setLoading(false);
      });
  }, [router.query.id, studyStore]);

  return (
    <StudyApplierListTemplate loading={loading} applierList={applierList} />
  );
}

export default StudyApplierListPage;

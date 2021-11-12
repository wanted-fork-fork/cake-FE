import UserMainTemplate from "@src/templates/UserMain.template";
import { useEffect, useState } from "react";
import { StudyListElement } from "@src/models/dto/study.dto";
import { useStores } from "@src/store/root.store";

function UserMainPage() {
  const { studyStore } = useStores();

  const [studyList, setStudyList] = useState<StudyListElement[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const getFeed = async function getFeed() {
      const list = await studyStore.getStudyFeed(page);
      setStudyList(list);
    };
    getFeed();
  }, [page, studyStore]);

  return <UserMainTemplate studyList={studyList} />;
}

export default UserMainPage;

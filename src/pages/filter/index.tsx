import FilteringTemplate from "@src/templates/Filtering.template";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { StudyType } from "@src/constant/enum.constant";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";

function SearchPage() {
  const router = useRouter();

  const [selectedMine, setSelectedMine] = useState([]);
  const [selectedYours, setSelectedYours] = useState([]);
  const [studyType, setStudyType] = useState(StudyType.OneToOne);

  const allowSearch = useMemo(
    () => selectedMine.length > 0 && selectedYours.length > 0 && studyType,
    [selectedMine, selectedYours, studyType],
  );
  const onSelectStudyType = useCallback((e) => {
    setStudyType(e.target.value);
  }, []);
  const onClickSearch = useCallback(() => {
    router.push(
      `/search?give=${selectedMine[0].id}&take=${selectedYours[0].id}&type=${studyType}`,
    );
  }, [router, selectedMine, selectedYours, studyType]);

  return (
    <FilteringTemplate
      selectedMine={selectedMine}
      setSelectedMine={setSelectedMine}
      selectedYours={selectedYours}
      setSelectedYours={setSelectedYours}
      studyType={studyType}
      setStudyType={onSelectStudyType}
      allowSearch={allowSearch}
      onClickSearch={onClickSearch}
    />
  );
}

export default SearchPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

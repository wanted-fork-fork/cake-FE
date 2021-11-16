// components
import StudyCreateTemplate from "@src/templates/StudyCreate.template";

// hooks
import useForm from "@src/hooks/useForm.hook";
import useDatepicker from "@src/hooks/useDatepicker";
import { useStores } from "@src/store/root.store";

// model
import { CreateStudyDto } from "@src/models/dto/study.dto";
import { useState } from "react";
import { StudyType } from "@src/constant/enum.constant";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";
import { AuthPermissionType } from "@src/constant/api.constant";
import { useRouter } from "next/router";
import usePreventRouteChangeIf from "@src/hooks/usePreventRouteChangeIf.hook";
import { Resource } from "@src/models/dto/api-response";

function CreateStudyPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const { value: startDate, onChange: onChangeStartDate } = useDatepicker();
  const { value: endDate, onChange: onChangeEndDate } = useDatepicker();
  const [selectedMine, setSelectedMine] = useState([]);
  const [selectedYours, setSelectedYours] = useState([]);
  const [uploaded, setUploaded] = useState<Resource[]>([]);

  const { values, handleChange, handleSubmit } = useForm<CreateStudyDto>({
    initialValues: {
      title: "",
      content: "",
      location: "",
      type: StudyType.OneToOne,
      startDate: "2021-11-12",
      endDate: "2021-11-12",
      peopleCnt: 1,
      chatRoom: "",
      roomPwd: "",
      images: [],
      give: [],
      take: [],
    },
    onSubmit(v: CreateStudyDto) {
      studyStore
        .createStudy({
          ...v,
          startDate: startDate.format("YYYY-MM-DD"),
          endDate: endDate.format("YYYY-MM-DD"),
          give: selectedMine.map((x) => x.id),
          take: selectedYours.map((x) => x.id),
          images: uploaded.map((x) => x.path),
        })
        .then(() => router.push(`/`));
    },
    validate() {
      return {};
    },
  });

  // usePreventRouteChangeIf(!submitted, null);

  return (
    <StudyCreateTemplate
      startDate={startDate}
      onChangeStartDate={onChangeStartDate}
      endDate={endDate}
      onChangeEndDate={onChangeEndDate}
      onSubmit={handleSubmit}
      onChange={handleChange}
      values={values}
      selectedMine={selectedMine}
      setSelectedMine={setSelectedMine}
      selectedYours={selectedYours}
      setSelectedYours={setSelectedYours}
      uploaded={uploaded}
      setUploaded={setUploaded}
    />
  );
}

export default CreateStudyPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

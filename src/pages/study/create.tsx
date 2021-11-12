import StudyCreateTemplate from "@src/templates/StudyCreate.template";
import useForm from "@src/hooks/useForm.hook";
import { CreateStudyDto } from "@src/models/dto/study.dto";
import { useStores } from "@src/store/root.store";
import { useEffect } from "react";
import useDatepicker from "@src/hooks/useDatepicker";

function CreateStudyPage() {
  const { studyStore, categoryStore } = useStores();

  const { value: startDate, onChange: onChangeStartDate } = useDatepicker();
  const { value: endDate, onChange: onChangeEndDate } = useDatepicker();

  const { values, handleChange, handleSubmit } = useForm<CreateStudyDto>({
    initialValues: {
      title: "string",
      content: "string",
      location: "string",
      type: null,
      startDate: "2021-11-12",
      endDate: "2021-11-12",
      peopleCnt: 1,
      chatRoom: "string",
      roomPwd: "string",
      images: [],
      give: [],
      take: [],
    },
    onSubmit(v: CreateStudyDto) {
      studyStore.createStudy({
        ...v,
        startDate: startDate.format("YYYY-MM-DD"),
        endDate: endDate.format("YYYY-MM-DD"),
      });
    },
    validate() {
      return {};
    },
  });

  return (
    <StudyCreateTemplate
      startDate={startDate}
      onChangeStartDate={onChangeStartDate}
      endDate={endDate}
      onChangeEndDate={onChangeEndDate}
      onSubmit={handleSubmit}
      onChange={handleChange}
      values={values}
      categoryList={categoryStore.categoryList}
    />
  );
}

export default CreateStudyPage;

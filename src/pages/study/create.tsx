import { useCallback, useState } from "react";
import { useRouter } from "next/router";

// components
import StudyCreateTemplate from "@src/templates/StudyCreate.template";

// hooks
import useForm, { formErrors } from "@src/hooks/useForm.hook";
import useDatepicker from "@src/hooks/useDatepicker";
import { useStores } from "@src/store/root.store";
import usePreventRouteChangeIf from "@src/hooks/usePreventRouteChangeIf.hook";
import { withAuthentication } from "@src/hooks/withAuthentication.hoc";

// model
import { CreateStudyDto } from "@src/models/dto/study.dto";
import { StudyType } from "@src/constant/enum.constant";
import { AuthPermissionType } from "@src/constant/api.constant";
import { Resource } from "@src/models/dto/api-response";
import useInput from "@src/hooks/useInput.hook";
import { chatroomPrefix } from "@src/constant/policy.constant";
import { checkMinimumLength } from "@src/utils/validate";

function CreateStudyPage() {
  const { studyStore } = useStores();
  const router = useRouter();

  const { value: startDate, onChange: onChangeStartDate } = useDatepicker(null);
  const { value: endDate, onChange: onChangeEndDate } = useDatepicker(null);
  const [selectedMine, setSelectedMine] = useState([]);
  const [selectedYours, setSelectedYours] = useState([]);
  const [uploaded, setUploaded] = useState<Resource[]>([]);
  const [allowDatepicker, setUseDatepicker] = useState(true);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const { value: givePoint, handleChange: onChangeGivePoint } = useInput("");
  const { value: takePoint, handleChange: onChangeTakePoint } = useInput("");

  const { values, handleChange, errors, handleSubmit, submitted } =
    useForm<CreateStudyDto>({
      initialValues: {
        title: "",
        content: "",
        storeName: "",
        storeAddress: "",
        type: StudyType.OneToOne,
        startDate: "2021-11-12",
        endDate: "2021-11-12",
        peopleCnt: 1,
        chatRoom: "",
        roomPwd: "",
        images: [],
        give: [],
        take: [],
        point: 0,
      },
      onSubmit(v: CreateStudyDto) {
        studyStore
          .createStudy({
            ...v,
            startDate: allowDatepicker ? startDate?.format("YYYY-MM-DD") : null,
            endDate: allowDatepicker ? endDate?.format("YYYY-MM-DD") : null,
            give: selectedMine.map((x) => x.id),
            take: selectedYours.map((x) => x.id),
            images: uploaded.map((x) => x.path),
            storeName: selectedCafe?.place_name || "",
            storeAddress: selectedCafe?.road_address_name || "",
            point: givePoint || takePoint || 0,
          })
          .then(() => router.push(`/`));
      },
      validate(v) {
        let error: formErrors = {};
        error = checkMinimumLength({
          value: v.title,
          minimum: 0,
          message: "제목을 입력해주세요.",
          keyName: "title",
          error,
        });
        if (v.chatRoom && !v.chatRoom.startsWith(chatroomPrefix)) {
          error.chatRoom = "카카오톡 오픈채팅 링크가 맞는지 확인해주세요.";
        }
        return error;
      },
    });

  usePreventRouteChangeIf(!submitted, null);

  const toggleUseDatePicker = useCallback(() => {
    setUseDatepicker(!allowDatepicker);
  }, [allowDatepicker]);

  return (
    <StudyCreateTemplate
      startDate={startDate}
      onChangeStartDate={onChangeStartDate}
      allowDatepicker={allowDatepicker}
      toggleUseDatepicker={toggleUseDatePicker}
      endDate={endDate}
      onChangeEndDate={onChangeEndDate}
      onSubmit={handleSubmit}
      onChange={handleChange}
      values={values}
      errors={errors}
      selectedMine={selectedMine}
      setSelectedMine={setSelectedMine}
      selectedYours={selectedYours}
      setSelectedYours={setSelectedYours}
      selectedCafe={selectedCafe}
      setSelectedCafe={setSelectedCafe}
      givePoint={givePoint}
      onChangeGivePoint={onChangeGivePoint}
      takePoint={takePoint}
      onChangeTakePoint={onChangeTakePoint}
      uploaded={uploaded}
      setUploaded={setUploaded}
    />
  );
}

export default CreateStudyPage;
export const getServersideProps = (ctx) =>
  withAuthentication(ctx, AuthPermissionType.USER);

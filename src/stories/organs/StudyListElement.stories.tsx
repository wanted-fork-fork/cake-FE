import StudyListElementComponent from "@src/components/organs/StudyListElement.component";
import { StudyListElement as StudyListElementDto } from "@src/models/dto/study.dto";
import StudyListElementSkeleton from "@src/components/skeletons/StudyListElement.skeleton";

export default {
  title: "organs/Study List Element",
  component: StudyListElementComponent,
};

const studySample: StudyListElementDto = {
  id: 1,
  title: "애프터 이펙트 알려주실 분 구합니다.",
  peopleCnt: 1,
  startDate: "2021-11-07T00:00:00.000+00:00",
  endDate: "2021-11-09T00:00:00.000+00:00",
  give: ["요리", "베이킹"],
  take: ["운동", "영상 편집"],
  img: "https://cdn.pixabay.com/photo/2021/09/01/16/09/cake-6591719__340.jpg",
};

const Template = () => (
  <div>
    <StudyListElementComponent study={studySample} />
    <StudyListElementSkeleton />
  </div>
);

export const StudyListElement = Template.bind({});

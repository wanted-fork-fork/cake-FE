import StudyDetailTemplate from "@src/templates/StudyDetail.template";
import { StudyDetailDto } from "@src/models/dto/study.dto";

export default {
  title: "template/Study Detail",
  component: StudyDetailTemplate,
};

const studySample: StudyDetailDto = {
  id: 1,
  title: "애프터 이펙트 알려주실 분 구합니다.",
  content:
    "저는 영상을 배우고 싶은데 혹시 영상러들 중 일러스트 관심잇으신 분 계신가요?",
  storeName: "아주대학교 카탈로그",
  storeAddress: "아주대학교 카탈로그",
  peopleCnt: 1,
  startDate: "2021-11-07T00:00:00.000+00:00",
  endDate: "2021-11-09T00:00:00.000+00:00",
  createdAt: "2021-07-21T00:00:00.000+00:00",
  give: ["요리", "베이킹"],
  take: ["운동", "영상 편집"],
  img: "https://cdn.pixabay.com/photo/2021/09/01/16/09/cake-6591719__340.jpg",
  images: [],
  user: {
    id: 3,
    nickname: "아주대애기",
    rate: 4.3,
    img: null,
  },
  apply: false,
};

const Template = () => <StudyDetailTemplate study={studySample} />;
const SkeletonTemplate = () => <StudyDetailTemplate study={null} />;

export const StudyDetail = Template.bind({});
export const Skeleton = SkeletonTemplate.bind({});

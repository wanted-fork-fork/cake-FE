import MyPageTemplate from "@src/templates/MyPage.template";
import { UserProfile } from "@src/models/dto/user.dto";
import { Category } from "@src/models/dto/signup.dto";

export default {
  title: "template/My Page",
  component: MyPageTemplate,
};

const profileSample = {
  user: {
    id: 3,
    nickname: "아주맨",
    email: "ajou@ajou.ac.kr",
    rate: 4.7,
    img: null,
  } as UserProfile,
  point: 3000,
  studyCount: 10,
  give: [
    {
      id: 2,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 3,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
    {
      id: 4,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 5,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
  ] as Category[],
  take: [
    {
      id: 2,
      name: "악기 연주",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/b79b6885f.jpg",
    },
    {
      id: 3,
      name: "주식투자",
      img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/category/156bee140.jpg",
    },
  ] as Category[],
};

const Template = (profile) => <MyPageTemplate profile={profileSample} />;

export const MyPage = Template.bind({});

MyPage.args = {
  profile: profileSample,
};

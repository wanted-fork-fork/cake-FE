import ApplierListElementComponent from "@src/components/molecules/ApplierListElement.component";

export default {
  title: "molecules/Applier List Element",
};

const userSample = {
  userId: 3,
  studyMemberId: 7,
  nickname: "예진",
  profileImg:
    "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/profile/5750452df.jpeg",
  rate: null,
  state: 2,
};

const Template = ({ userInfo }) => (
  <ApplierListElementComponent userInfo={userInfo} />
);

export const ApplierListElement = Template.bind({});
ApplierListElement.args = {
  userInfo: userSample,
};

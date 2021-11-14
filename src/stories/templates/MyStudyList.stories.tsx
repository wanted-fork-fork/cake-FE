import MyStudyListTemplate from "@src/templates/MyStudyList.template";
import { StudyManageListElement } from "@src/models/dto/study.dto";
import { StudyManageType } from "@src/constant/enum.constant";
import { useState } from "react";

export default {
  title: "template/My Study List",
  component: MyStudyListTemplate,
};

const studyListSample: StudyManageListElement[] = [
  {
    id: 70,
    title: "애프터 이펙트 알려주실 분 구합니다.",
    peopleCnt: 1,
    startDate: "2021-11-07T00:00:00.000+00:00",
    endDate: "2021-11-09T00:00:00.000+00:00",
    give: ["요리", "베이킹", "영상 편집"],
    take: ["운동", "영상 편집"],
    img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/img1",
    state: 1,
  },
  {
    id: 71,
    title: "애프터 이펙트 알려주실 분 구합니다.",
    peopleCnt: 1,
    startDate: "2021-11-07T00:00:00.000+00:00",
    endDate: "2021-11-09T00:00:00.000+00:00",
    give: ["요리", "베이킹", "영상 편집"],
    take: ["운동", "영상 편집"],
    img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/img1",
    state: 1,
  },
  {
    id: 72,
    title: "애프터 이펙트 알려주실 분 구합니다.",
    peopleCnt: 1,
    startDate: "2021-11-07T00:00:00.000+00:00",
    endDate: "2021-11-09T00:00:00.000+00:00",
    give: ["요리", "베이킹", "영상 편집"],
    take: ["운동", "영상 편집"],
    img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/img1",
    state: 1,
  },
  {
    id: 73,
    title: "애프터 이펙트 알려주실 분 구합니다.",
    peopleCnt: 1,
    startDate: "2021-11-07T00:00:00.000+00:00",
    endDate: "2021-11-09T00:00:00.000+00:00",
    give: ["요리", "베이킹", "영상 편집"],
    take: ["운동", "영상 편집"],
    img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/img1",
    state: 1,
  },
  {
    id: 74,
    title: "애프터 이펙트 알려주실 분 구합니다.",
    peopleCnt: 1,
    startDate: "2021-11-07T00:00:00.000+00:00",
    endDate: "2021-11-09T00:00:00.000+00:00",
    give: ["요리", "베이킹", "영상 편집"],
    take: ["운동", "영상 편집"],
    img: "https://fork-fork-cake.s3.ap-northeast-2.amazonaws.com/img1",
    state: 1,
  },
];

const Template = ({ studyList }) => (
  <MyStudyListTemplate studyList={studyList} />
);

export const MyStudyList = Template.bind({});
MyStudyList.args = {
  studyList: studyListSample,
};

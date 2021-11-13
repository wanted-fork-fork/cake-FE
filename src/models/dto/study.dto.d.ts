import { StudyType } from "@src/constant/enum.constant";

export interface CreateStudyDto {
  title: string;
  content: string;
  location: string;
  type: StudyType;
  startDate: string;
  endDate: string;
  peopleCnt: number;
  chatRoom: string;
  roomPwd: string;
  images: string[];
  give: string[];
  take: string[];
}

export interface StudyListElement {
  id: number;
  title: string;
  peopleCnt: number;
  startDate: string;
  endDate: string;
  give: string[];
  take: string[];
  img: string;
}

export interface StudyDetailDto extends StudyListElement {
  contents: string;
  location: string;
  createdAt: string;
}

export default {};

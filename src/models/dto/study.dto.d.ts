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

export default {};

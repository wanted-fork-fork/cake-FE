import { StudyState, StudyType } from "@src/constant/enum.constant";
import { UserProfile } from "@src/models/dto/user.dto";

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
  content: string;
  location: string;
  createdAt: string;
  images: string[];
  user: UserProfile;
  apply: boolean;
}

export interface StudyManageListElement extends StudyListElement {
  state: StudyState;
}

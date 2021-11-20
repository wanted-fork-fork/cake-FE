import { StudyState, StudyType } from "@src/constant/enum.constant";
import { UserProfile } from "@src/models/dto/user.dto";

export interface CreateStudyDto {
  title: string;
  content: string;
  storeName: string;
  storeAddress: string;
  type: StudyType;
  startDate: string;
  endDate: string;
  peopleCnt: number;
  chatRoom: string;
  roomPwd: string;
  images: string[];
  give: string[] | number[];
  take: string[] | number[];
  point: number | string;
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
  user?: UserProfile;
}

export interface StudyFilteringDto {
  filter: {
    give: string;
    take: string;
    type: StudyType;
  };
  study: StudyListElement[];
}

export interface StudyDetailDto extends StudyListElement {
  content: string;
  storeName: string;
  storeAddress: string;
  createdAt: string;
  images: string[];
  user: UserProfile;
  apply: boolean;
}

export interface StudyManageListElement extends StudyListElement {
  state: StudyState;
}

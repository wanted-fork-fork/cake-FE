import { Category } from "@src/models/dto/signup.dto";

export interface LoginDto {
  email: string;
  pwd: string;
}

export interface UserProfile {
  id: number;
  nickname: string;
  email?: string;
  rate: number | null;
  img: string | null;
}

export interface UserMyPageDto {
  profileImg: string;
  nickname: string;
  email: string;
  point: number;
  rate: number | null;
  studyCnt: number;
  give: Category[];
  take: Category[];
}

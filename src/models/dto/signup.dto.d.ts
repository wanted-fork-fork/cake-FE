export type SendCertificationMailDto = {
  email: string;
};

export type CheckOverlapEmailDto = {
  email: string;
};

export type CheckOverlapNicknameDto = {
  nickname: string;
};

export type ConfirmCertificationDto = {
  email: string;
  code: string;
};

export type SignupForm = {
  email: string;
  pwd: string;
  nickname: string;
  img: string | null;
  univCategory: string;
  univ: string;
  give: number[];
  take: number[];
};

export type Univ = {
  id: number;
  name: string;
  email: string;
};

export type Category = {
  id: number;
  name: string;
  img: string;
};

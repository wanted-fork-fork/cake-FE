export type SendCertificationMailDto = {
  email: string;
};

export type CheckOverlapEmailDto = {
  email: string;
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
  univCategory: number;
  univ: number;
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

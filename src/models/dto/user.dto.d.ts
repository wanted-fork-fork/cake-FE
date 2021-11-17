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

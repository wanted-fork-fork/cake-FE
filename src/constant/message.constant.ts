export type TitleMessageType = {
  title: string;
  description: string;
  button: string | boolean;
  allowBack: boolean;
};
export const SignupTitleMessages: TitleMessageType[] = [
  {
    title: "Cake가 처음이신가요?",
    description: "약관에 동의하시고 Cake를 이용해보세요!",
    button: "학교 계정 인증하기",
    allowBack: true,
  },
  {
    title: "학교를 선택해주세요.",
    description: "",
    button: "학교 계정 인증하기",
    allowBack: true,
  },
  {
    title: "학교 계정을 입력해주세요.",
    description: "학교 인증을 위해 학교 계정으로만 회원가입이 가능합니다.",
    button: "다음",
    allowBack: true,
  },
  {
    title: "비밀번호를 설정해주세요.",
    description: "",
    button: "추가 정보 입력",
    allowBack: true,
  },
  {
    title: "추가 정보를 입력해주세요.",
    description: "프로필 사진과 닉네임을 설정해주세요.",
    button: "다음",
    allowBack: true,
  },
  {
    title: "자신 있는 재능을 선택해주세요.",
    description: "잘하는 것이 바뀌었다면 마이 페이지에서 수정해주세요!",
    button: false,
    allowBack: true,
  },
  {
    title: "관심 있거나 배우고 싶은 주제를 선택해주세요.",
    description: "관심 있는 것이 바뀌었다면 마이 페이지에서 수정해주세요!",
    button: false,
    allowBack: true,
  },
  { title: "", description: "", button: false, allowBack: false },
];

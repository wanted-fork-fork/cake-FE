export enum SignupStep {
  SELECT_SCHOOL,
  CONFIRM_EMAIL,
  PASSWORD_INPUT,
  DETAILS_INPUT,
  SELECT_GIVE_CATEGORY,
  SELECT_TAKE_CATEGORY,
  COMPLETE_SIGNUP,
}

export enum CategoryType {
  GIVE,
  TAKE,
}

export enum UnivCategory {
  HUMANITY, // 인문대
  SOCIAL, // 사회대
  ENGINEERING, // 공과대
  NATURE, // 자연대
  BUSINESS, // 경영대
  EDUCATION, // 사범대
  ARTS, // 예술대
  IT, // 정보통신대
}

export const UnivCategoryEnumToLabel = {
  [UnivCategory.HUMANITY]: "인문대학",
  [UnivCategory.SOCIAL]: "사회대학",
  [UnivCategory.ENGINEERING]: "공과대학",
  [UnivCategory.NATURE]: "자연대학",
  [UnivCategory.BUSINESS]: "경영대학",
  [UnivCategory.EDUCATION]: "사범대학",
  [UnivCategory.ARTS]: "예술대학",
  [UnivCategory.IT]: "정보통신대학",
};

export enum StudyType {
  OneToOne,
  OneToMany,
  ManyToMany,
}

export const StudyTypeEnumToLabel = {
  [StudyType.OneToOne]: "1:1",
  [StudyType.OneToMany]: "1:n",
  [StudyType.ManyToMany]: "n",
};

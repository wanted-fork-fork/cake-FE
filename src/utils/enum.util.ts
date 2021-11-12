import {
  StudyTypeEnumToLabel,
  UnivCategoryEnumToLabel,
} from "@src/constant/enum.constant";

export function getUnivCategoryList() {
  return Object.entries(UnivCategoryEnumToLabel).map((x) => ({
    key: x[0],
    value: x[1],
    disabled: false,
  }));
}

export function getStudyTypeList() {
  return Object.entries(StudyTypeEnumToLabel).map((x, index) => ({
    key: x[0],
    value: x[1],
    disabled: index !== 0,
  }));
}

export default {
  getUnivCategoryList,
};

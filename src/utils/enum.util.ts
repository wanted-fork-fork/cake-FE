import { UnivCategoryEnumToLabel } from "@src/constant/enum.constant";

export function getUnivCategoryList() {
  return Object.entries(UnivCategoryEnumToLabel).map((x) => ({
    key: x[0],
    value: x[1],
  }));
}

export default {
  getUnivCategoryList,
};

import { CategoryTag } from "@src/components/atoms/CategoryTag";

export default {
  title: "atoms/Category",
  component: CategoryTag,
};

const Template = ({ contents }) => (
  <CategoryTag type="button">{contents}</CategoryTag>
);

export const Category = Template.bind({});
Category.args = {
  contents: "일러스트",
};

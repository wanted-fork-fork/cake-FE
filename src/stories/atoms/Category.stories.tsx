import { Category as CategoryComponent } from "@src/components/atoms/Category";

export default {
  title: "atoms/Category",
  component: CategoryComponent,
};

const Template = ({ contents }) => (
  <CategoryComponent type="button">{contents}</CategoryComponent>
);

export const Category = Template.bind({});
Category.args = {
  contents: "일러스트",
};

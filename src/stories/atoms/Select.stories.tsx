import SelectComponent from "@src/components/atoms/Select";
import { UnivCategoryEnumToLabel } from "@src/constant/enum.constant";

export default {
  title: "atoms/Select",
  component: SelectComponent,
};

const values = Object.entries(UnivCategoryEnumToLabel).map((x) => ({
  key: x[0],
  value: x[1],
}));

const Template = () => (
  <SelectComponent
    list={values}
    idKeyName="key"
    labelKeyName="value"
    onSelect={null}
    selected={null}
  />
);

export const Select = Template.bind({});

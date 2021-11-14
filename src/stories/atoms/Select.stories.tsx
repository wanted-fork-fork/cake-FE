import SelectComponent, { SelectStyleProp } from "@src/components/atoms/Select";
import { UnivCategoryEnumToLabel } from "@src/constant/enum.constant";

export default {
  title: "atoms/Select",
  component: SelectComponent,
};

const values = Object.entries(UnivCategoryEnumToLabel).map((x) => ({
  key: x[0],
  value: x[1],
}));

const Template = ({ shape = "default" }: SelectStyleProp) => (
  <SelectComponent
    list={values}
    idKeyName="key"
    labelKeyName="value"
    onSelect={null}
    selected={null}
    shape={shape}
  />
);

export const Select = Template.bind({});
export const LightSelect = Template.bind({});
LightSelect.args = { shape: "light" };

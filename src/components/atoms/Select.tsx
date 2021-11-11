import { ReactEventHandler, useMemo } from "react";
import styled from "styled-components";

// style
import { LightUnderline, Underline } from "@src/styles/common";

export type SelectStyleProp = {
  shape: "default" | "light";
};

const Select = styled.select<SelectStyleProp>`
  ${({ shape }) => {
    switch (shape) {
      case "default":
        return Underline;
      case "light":
        return LightUnderline;
      default:
        return Underline;
    }
  }};

  width: 100%;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

type SelectProp<T> = {
  selected: string;
  list: T[];
  idKeyName: string;
  labelKeyName: string;
  defaultText: string;
  onSelect: ReactEventHandler<HTMLSelectElement>;
  shape?: "default" | "light";
};
SelectComponent.defaultProps = {
  shape: "default",
};
function SelectComponent<T>({
  selected = "",
  list,
  idKeyName,
  labelKeyName,
  onSelect,
  defaultText = "",
  shape,
}: SelectProp<T>) {
  const options = useMemo(() => {
    const optionList = list.map((x) => ({
      key: x[idKeyName],
      label: x[labelKeyName],
    }));
    return optionList.map((x) => (
      <option key={x.key} value={x.key}>
        {x.label}
      </option>
    ));
  }, [list, idKeyName, labelKeyName]);

  return (
    <Select defaultValue={selected} onChange={onSelect} shape={shape}>
      <option disabled value="">
        {defaultText}
      </option>
      {options}
    </Select>
  );
}

export default SelectComponent;

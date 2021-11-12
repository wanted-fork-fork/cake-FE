import { ReactEventHandler, useMemo } from "react";
import styled from "styled-components";

// style
import { LightUnderline, Underline } from "@src/styles/common";
import theme from "@src/styles/theme";

export type SelectStyleProp = {
  shape: "default" | "light";
  selected: string | null;
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

  ${({ shape }) => (shape === "light" ? "padding-left: 6px;" : "")};

  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  color: ${({ selected }) =>
    selected ? theme.color.black : theme.color.gray4};

  option {
    margin: 0;
    padding: 0;
  }
`;

type SelectProp<T> = {
  selected?: string | null;
  list: T[];
  idKeyName: string;
  labelKeyName: string;
  defaultText: string | null;
  onSelect: ReactEventHandler<HTMLSelectElement>;
  shape?: "default" | "light";
};
SelectComponent.defaultProps = {
  shape: "default",
  selected: null,
};
function SelectComponent<T>({
  selected,
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
    <Select
      selected={selected}
      defaultValue={selected}
      placeholder={defaultText}
      onChange={onSelect}
      shape={shape}
    >
      <option disabled selected hidden>
        {defaultText}
      </option>
      {options}
    </Select>
  );
}

export default SelectComponent;

import { ReactEventHandler, useMemo } from "react";
import styled from "styled-components";

// style
import { Underline } from "@src/styles/common";

const Select = styled.select`
  ${Underline};
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
};
function SelectComponent<T>({
  selected = "",
  list,
  idKeyName,
  labelKeyName,
  onSelect,
  defaultText = "",
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
    <Select defaultValue={selected} onChange={onSelect}>
      <option disabled value="">
        {defaultText}
      </option>
      {options}
    </Select>
  );
}

export default SelectComponent;

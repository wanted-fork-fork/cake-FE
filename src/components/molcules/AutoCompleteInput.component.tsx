import { ChangeEventHandler, useMemo } from "react";
import { Dropdown, Menu } from "antd";
import { SelectEventHandler } from "rc-menu/es/interface";
import styled from "styled-components";

// components
import { UnderlineInput } from "@src/components/atoms/Input";

interface AutoCompleteInputProps<T> {
  list: T[];
  inputValue: string;
  selected: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSelect: SelectEventHandler;
  valueKeyName: string;
  labelKeyName: string;
  placeholder: string;
}

const Wrapper = styled.div`
  .ant-select {
    width: 100%;
  }
`;

function AutoCompleteInputComponent<T>({
  list,
  inputValue,
  selected,
  onChange,
  onSelect,
  valueKeyName,
  labelKeyName,
  placeholder,
}: AutoCompleteInputProps<T>) {
  const options = useMemo(
    () =>
      inputValue
        ? list
            .filter((x) => x[labelKeyName].startsWith(inputValue))
            .map((x) => ({
              key: x[valueKeyName],
              value: x[labelKeyName],
              label: x[labelKeyName],
              ...x,
            }))
        : [],
    [list, inputValue, valueKeyName, labelKeyName],
  );

  const menu = useMemo(
    () => (
      <Menu
        selectedKeys={[selected]}
        style={{ height: "300px", overflowY: "auto" }}
      >
        {options.map((x) => (
          <Menu.Item onClick={onSelect} key={x.key} title={x.label}>
            {x.label}
          </Menu.Item>
        ))}
      </Menu>
    ),
    [options, selected, onSelect],
  );

  return (
    <Wrapper>
      <Dropdown overlay={menu} trigger={["click"]}>
        <UnderlineInput
          value={inputValue}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Dropdown>
    </Wrapper>
  );
}

export default AutoCompleteInputComponent;

import { ChangeEventHandler, useMemo } from "react";
import { Dropdown, Menu } from "antd";
import { SelectEventHandler } from "rc-menu/es/interface";
import styled from "styled-components";

// components
import {
  LightUnderlineInput,
  UnderlineInput,
} from "@src/components/atoms/Input";

interface AutoCompleteInputProps<T> {
  list: T[];
  inputValue: string;
  shape?: string;
  fontSize?: "default" | "large" | "small";
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
AutoCompleteInputComponent.defaultProps = {
  shape: "default",
  fontSize: "default",
};

function AutoCompleteInputComponent<T>({
  list,
  inputValue,
  shape = "default",
  fontSize,
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
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {inputValue === "" && options.length === 0 ? (
          <Menu.Item key={-1} disabled>
            검색어를 입력해주세요.
          </Menu.Item>
        ) : (
          ""
        )}
        {inputValue !== "" && options.length === 0 ? (
          <Menu.Item key={-2} disabled>
            일치하는 항목을 찾지 못했습니다.
          </Menu.Item>
        ) : (
          ""
        )}
        {options.map((x) => (
          <Menu.Item onClick={onSelect} key={x.key} title={x.label}>
            {x.label}
          </Menu.Item>
        ))}
      </Menu>
    ),
    [options, selected, onSelect, inputValue],
  );

  const input = useMemo(() => {
    switch (shape) {
      case "default":
        return (
          <UnderlineInput
            value={inputValue}
            fontSize={fontSize}
            onChange={onChange}
            placeholder={placeholder}
          />
        );
      case "light":
        return (
          <LightUnderlineInput
            value={inputValue}
            onChange={onChange}
            fontSize={fontSize}
            placeholder={placeholder}
          />
        );
      default:
        return (
          <UnderlineInput
            value={inputValue}
            onChange={onChange}
            fontSize={fontSize}
            placeholder={placeholder}
          />
        );
    }
  }, [shape, inputValue, fontSize, onChange, placeholder]);

  return (
    <Wrapper>
      <Dropdown overlay={menu} trigger={["click"]}>
        {input}
      </Dropdown>
    </Wrapper>
  );
}

export default AutoCompleteInputComponent;

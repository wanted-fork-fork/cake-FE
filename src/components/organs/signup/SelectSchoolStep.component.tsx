import { Dispatch, SetStateAction, useCallback } from "react";

// components
import InputWithSuffixComponent from "@src/components/molcules/InputWithSuffix.component";
import AutoCompleteInputComponent from "@src/components/molcules/AutoCompleteInput.component";
import SearchIcon from "@src/components/icon/Search.icon";

// model
import { Univ } from "@src/models/dto/signup.dto";
import useInput from "@src/hooks/useInput.hook";

type SelectSchoolStepProps = {
  univList: Univ[];
  univId: string;
  setUnivId: Dispatch<SetStateAction<string>>;
};

function SelectSchoolStepComponent({ univList, univId, setUnivId }: SelectSchoolStepProps) {
  const { value, handleChange, setValue } = useInput("");

  const handleSelect = useCallback((e) => {
    const key = e.key
    const univ = univList.find(x => x.id == key)
    setValue(univ?.name || "")
    setUnivId(key.toString())
  }, [univList, setUnivId]);

  return (
    <InputWithSuffixComponent
      input={
        <AutoCompleteInputComponent
          list={univList}
          labelKeyName="name"
          valueKeyName="id"
          placeholder="학교 이름을 검색하세요"
          inputValue={value}
          selected={univId}
          onChange={handleChange}
          onSelect={handleSelect}
        />
      }
      suffix={<SearchIcon />}
    />
  );
}

export default SelectSchoolStepComponent;

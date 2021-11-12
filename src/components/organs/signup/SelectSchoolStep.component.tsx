import { useCallback, useMemo } from "react";
import { observer } from "mobx-react";

// store
import { useStores } from "@src/store/root.store";

// hooks
import useInput from "@src/hooks/useInput.hook";

// components
import InputWithSuffixComponent from "@src/components/molecules/InputWithSuffix.component";
import AutoCompleteInputComponent from "@src/components/molecules/AutoCompleteInput.component";
import SearchIcon from "@src/components/icon/Search.icon";

const SelectSchoolStepComponent = observer(() => {
  const { signupStore } = useStores();

  const { value, handleChange, setValue } = useInput("");

  const handleSelect = useCallback(
    (e) => {
      const univId = e.key;
      const univ = signupStore.univList.find((x) => x.id.toString() === univId);
      setValue(univ?.name || "");
      signupStore.setFormValue("univ", univId);
    },
    [setValue, signupStore],
  );

  const univId = useMemo(
    () => signupStore.form.univ.toString(),
    [signupStore.form],
  );

  return (
    <InputWithSuffixComponent
      input={
        <AutoCompleteInputComponent
          list={signupStore.univList}
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
});

export default SelectSchoolStepComponent;

// components
import { UnderlineInput } from "@src/components/atoms/Input";
import InputWithSuffixComponent from "@src/components/molcules/InputWithSuffix.component";
import SearchIcon from "@src/components/icon/Search.icon";

function SelectSchoolStepComponent() {
  return (
    <InputWithSuffixComponent
      input={<UnderlineInput placeholder="학교 이름을 검색하세요" />}
      suffix={<SearchIcon />}
    />
  );
}

export default SelectSchoolStepComponent;

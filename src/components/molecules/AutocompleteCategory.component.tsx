import AutoCompleteInputComponent from "@src/components/molecules/AutoCompleteInput.component";
import { useStores } from "@src/store/root.store";
import { observer } from "mobx-react";
import useInput from "@src/hooks/useInput.hook";
import { useCallback, useEffect } from "react";

const AutocompleteCategoryComponent = observer(
  ({ selected, setSelected, placeholder }) => {
    const { categoryStore } = useStores();

    useEffect(() => {
      categoryStore.getCategoryList();
    }, [categoryStore]);

    const { value, handleChange, setValue } = useInput("");
    const handleSelect = useCallback(
      (e) => {
        const id = e.key;
        const category = categoryStore.categoryList.find(
          (x) => x.id.toString() === id,
        );
        setValue(category?.name || "");
        setSelected(id);
      },
      [categoryStore.categoryList, setValue, setSelected],
    );

    return (
      <AutoCompleteInputComponent
        shape="light"
        fontSize="small"
        list={categoryStore.categoryList}
        labelKeyName="name"
        valueKeyName="id"
        placeholder={placeholder}
        inputValue={value}
        selected={selected}
        onChange={handleChange}
        onSelect={handleSelect}
      />
    );
  },
);

export default AutocompleteCategoryComponent;
